import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-family: Helvetica, Tahoma, Arial, STXihei, '华文细黑', 'Microsoft YaHei',
      '微软雅黑', SimSun, '宋体', Heiti, '黑体', sans-serif;

    --color-primary: rgb(49 194 124);
  }

  body {
    overscroll-behavior-y: contain;
    overflow: hidden;
  }
`;
