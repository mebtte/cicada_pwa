import styled, { css } from 'styled-components';

import ellipsis from '@/style/ellipsis';
import { CARD_MARGIN } from './constant';

const MIN_WIDTH = 140;
const amountCache: {
  [key: number]: number;
} = {};
const widthCache: {
  [key: number]: string;
} = {};

function getAmountOfOneLine(containerWidth: number) {
  let amount = amountCache[containerWidth];
  if (!amount) {
    amount = Math.floor(containerWidth / MIN_WIDTH);
    amountCache[containerWidth] = amount;
  }
  return amount;
}

function getWidth(containerWidth: number) {
  let width = widthCache[containerWidth];
  if (!width) {
    width = `calc(${100 / getAmountOfOneLine(containerWidth)}% - ${
      CARD_MARGIN * 2
    }px)`;
    widthCache[containerWidth] = width;
  }
  return width;
}

export default styled.div<{
  containerWidth: number;
}>`
  display: inline-block;
  margin: ${CARD_MARGIN}px;
  > .cover-area {
    position: relative;
    > .actions {
      opacity: 0;
      transition: all 300ms;
      position: absolute;
      width: 100%;
      bottom: -1px;
      right: 0;
      padding: 5px 10px;
      box-sizing: border-box;
      background: linear-gradient(
        to bottom,
        rgb(255 255 255 / 0.4),
        rgb(255 255 255 / 0.7)
      );
      text-align: right;
    }
  }
  > .name {
    ${ellipsis}
    color: rgb(55 55 55);
    margin-top: 5px;
    font-size: 14px;
    line-height: 1.5;
    display: block;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }
  > .singers {
    ${ellipsis}
    color: rgb(222 222 222);
    font-size: 12px;
    line-height: 1.3;
  }
  &:hover {
    > .cover-area {
      > .actions {
        opacity: 1;
      }
    }
  }
  ${({ containerWidth }) => css`
    width: ${getWidth(containerWidth)};
  `}
`;
