import styled from 'styled-components';

import ellipsis from '@/style/ellipsis';

const INDEX_WIDTH = 50;

export default styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-top: 1px;
  border-bottom: 1px solid rgb(0 0 0 / 0.05);
  > .index {
    font-size: 12px;
    color: rgb(155 155 155);
    width: ${INDEX_WIDTH}px;
  }
  > .info {
    ${ellipsis}
    color: rgb(222 222 222);
    flex: 1;
    margin-right: 10px;
    > .name {
      margin: 0 10px 0 0;
      padding: 0;
      font-size: 14px;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
      color: rgb(55 55 55);
      &:hover {
        color: rgb(0 0 0);
      }
    }
    > .singers {
      font-size: 12px;
    }
  }
  > .actions {
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover > .actions {
    opacity: 1;
  }
`;
