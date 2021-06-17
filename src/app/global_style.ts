import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-family: Helvetica, Tahoma, Arial, STXihei, '华文细黑', 'Microsoft YaHei',
      '微软雅黑', SimSun, '宋体', Heiti, '黑体', sans-serif;

    --color-primary: rgb(49 194 124);

    --text-color-primary: rgb(55 55 55);
    --text-color-secondary: rgb(155 155 155);
    --text-color-tertiary: rgb(222 222 222);
  }

  body {
    overscroll-behavior-y: contain;
    overflow: hidden;
  }
`;
