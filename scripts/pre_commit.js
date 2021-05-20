#!/usr/bin/env node
/* eslint-disable no-console */
const path = require('path');
const cp = require('child_process');

const chalk = require('chalk');
const ora = require('ora');

const execAsync = (cmd) =>
  new Promise((resolve, reject) =>
    cp.exec(cmd, (error, stdout, stderr) => {
      if (error) {
        return reject(new Error(stderr || stdout));
      }
      return resolve(stdout);
    }),
  );

async function preCommit() {
  let spinner = ora('正在获取提交的文件列表...').start();
  const existStagedFileList = (
    await execAsync('git diff --cached --name-only --diff-filter=ACMR')
  )
    .split('\n')
    .filter((file) => !!file);
  spinner.succeed('已获取提交的文件列表');

  spinner = ora('正在校验文件...').start();
  const CORRECT_FILE_PART = /^[a-z0-9.]{1}[a-z0-9_.]*$/;
  const wrongNameFileList = [];
  const styleFileList = [];
  for (const file of existStagedFileList) {
    const parts = file.split('/');
    for (const part of parts) {
      if (!CORRECT_FILE_PART.test(part)) {
        wrongNameFileList.push(file);
        break;
      }
    }

    const desc = path.parse(file);
    if (['.css', '.scss', '.less', '.styl'].includes(desc.ext)) {
      styleFileList.push(file);
    }
  }
  if (wrongNameFileList.length || styleFileList.length) {
    spinner.fail('文件校验失败');
    if (wrongNameFileList.length) {
      console.log(
        chalk.red('😭 文件名仅允许小写字母/数字/下划线且以小写字母开头'),
      );
      console.log(wrongNameFileList.join('\n'));
    }
    if (styleFileList.length) {
      console.log(chalk.red('😭 不允许使用样式文件, 请使用 styled-components'));
      console.log(styleFileList.join('\n'));
    }
    process.exit(1);
  }
  spinner.succeed('文件检验通过');

  const canPrettierifyFiles = existStagedFileList.filter((file) => {
    const desc = path.parse(file);
    return ['.json', '.js', '.jsx', '.ts', '.tsx', '.md'].includes(desc.ext);
  });
  if (canPrettierifyFiles.length) {
    spinner = ora('正在使用 prettier 格式化...').start();
    await execAsync(`prettier --write ${canPrettierifyFiles.join(' ')}`);
    await execAsync(`git add ${canPrettierifyFiles.join(' ')}`);
    spinner.succeed('prettier 格式化完成');
  }

  const eslintFileList = existStagedFileList.filter((file) => {
    const desc = path.parse(file);
    return ['.js', '.jsx', '.ts', '.tsx'].includes(desc.ext);
  });
  if (eslintFileList.length) {
    spinner = ora('正在使用 eslint 校验...').start();
    try {
      await execAsync(`eslint ${eslintFileList.join(' ')}`);
    } catch (error) {
      spinner.fail('eslint 校验失败');
      console.log(error.message);
      process.exit(1);
    }
    spinner.succeed('eslint 校验通过');
  }

  const tsFileList = existStagedFileList.filter((file) => {
    const desc = path.parse(file);
    return ['.ts', '.tsx'].includes(desc.ext);
  });
  if (tsFileList.length) {
    spinner = ora('正在进行 typescript 类型校验...').start();
    try {
      await execAsync('tsc --project tsconfig.json --noEmit');
    } catch (error) {
      spinner.fail('typescript 类型校验失败');
      console.log(error.message);
      process.exit(1);
    }
    spinner.succeed('typescript类型校验通过');
  }
}

preCommit()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
