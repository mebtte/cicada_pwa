import React from 'react';
import styled, { css } from 'styled-components';

export enum Type {
  SQ = 'sq',
  HQ = 'hq',
  AC = 'ac',
  FORK = 'fo',
}

const TYPE_MAP: Record<
  Type,
  {
    label: string;
    color: string;
  }
> = {
  [Type.SQ]: {
    label: 'sq',
    color: '#ff8e3c',
  },
  [Type.HQ]: {
    label: 'hq',
    color: '#6246ea',
  },
  [Type.AC]: {
    label: 'ac',
    color: '#ff6e6c',
  },
  [Type.FORK]: {
    label: 'fo',
    color: '#67568c',
  },
};

const Style = styled.div`
  display: inline-block;
  font-size: 12px;
  line-height: 12px;
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  padding: 1px 3px;
  ${({ color }) => css`
    color: ${color};
    border-color: ${color};
  `}
`;

interface Props {
  type: Type;
  gray?: boolean;
  [key: string]: any;
}

const Tag = React.forwardRef<HTMLDivElement, Props>(
  ({ type, gray = false, ...props }: Props, ref) => {
    const { label, color } = TYPE_MAP[type];
    return (
      <Style {...props} ref={ref} color={gray ? 'rgb(155 155 155)' : color}>
        {label}
      </Style>
    );
  },
);

export default React.memo(Tag);
