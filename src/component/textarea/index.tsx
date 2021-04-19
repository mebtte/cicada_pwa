import styled from 'styled-components';

/**
 * 输入区域
 * @author mebtte<hi@mebtte.com>
 */
const Textarea = styled.textarea`
  border: none;
  border-radius: 4px;
  outline: none;
  color: rgb(55 55 55);
  background-color: rgb(0 0 0 / 0.04);
  height: 32px;
  box-sizing: border-box;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.5;
  transition: all 300ms;
  &:focus {
    color: rgb(33 33 33);
    box-shadow: inset 0 0 0 2px rgb(49 194 124 / 0.8);
  }
  &:disabled {
    color: rgb(0 0 0 / 0.38);
    background-color: rgb(0 0 0 / 0.08);
    cursor: not-allowed;
  }
`;

export default Textarea;
