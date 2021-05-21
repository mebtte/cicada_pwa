import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import Input from '../input';
import CircularLoader from '../circular_loader';

const ANIMATION_DURATION = 350;
const Style = styled.div<{ arrayVisible: boolean }>`
  position: relative;
  > .input {
    width: 100%;
  }
  > .array {
    z-index: 1;
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    background-color: #f6f6f6;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    transition: ${ANIMATION_DURATION}ms;
    &:empty::after {
      content: '空';
      display: block;
      font-size: 12px;
      padding: 10px 12px;
      color: rgb(155 155 155);
      cursor: not-allowed;
    }
    > .loading {
      padding: 12px;
    }
  }
  ${({ arrayVisible }) => css`
    > .array {
      opacity: ${arrayVisible ? 1 : 0};
      transform: translateY(${arrayVisible ? 0 : '32px'});
      pointer-events: ${arrayVisible ? 'auto' : 'none'};
    }
  `}
`;
const StyledItem = styled.div<{ active: boolean }>`
  padding: 10px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: ${ANIMATION_DURATION}ms;
  &:hover {
    background-color: rgb(49 194 124 / 0.05);
  }
  ${({ active }) => css`
    background-color: ${active ? 'var(--color-primary) !important' : '#fff'};
    color: ${active ? '#fff' : '#333'};
  `}
`;

function Select<Item>({
  value,
  onChange,
  array,
  itemRenderer,
  onInputChange,
  loading = false,
  placeholder,
  disabled,
  ...props
}: {
  value: Item | null;
  onChange: (item: Item) => void;
  array: Item[];
  itemRenderer: (item: Item, customInput: string) => string;
  onInputChange?: (value: string) => void;
  loading?: boolean;
  placeholder?: string;
  disabled?: boolean;
  [key: string]: any;
}) {
  const [customInput, setCustomInput] = useState('');
  const onCustomInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCustomInput(event.target.value);

  const [arrayVisible, setArrayVisible] = useState(false);
  const onFocus = () => setArrayVisible(true);
  const onBlur = () =>
    window.setTimeout(() => setArrayVisible(false), ANIMATION_DURATION);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    onInputChange && onInputChange(customInput);
  }, [onInputChange, customInput]);

  return (
    <Style {...props} arrayVisible={arrayVisible}>
      <Input
        className="input"
        value={
          // eslint-disable-next-line no-nested-ternary
          arrayVisible ? customInput : value ? itemRenderer(value, '') : ''
        }
        onChange={onCustomInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
      />
      <div className="array">
        {loading ? (
          <div className="loading">
            <CircularLoader />
          </div>
        ) : (
          array.map((item, index) => {
            const target = itemRenderer(item, customInput);
            if (!target) {
              return null;
            }
            return (
              <StyledItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                active={value === item}
                onClick={() => onChange(item)}
              >
                {target}
              </StyledItem>
            );
          })
        )}
      </div>
    </Style>
  );
}

export default Select;
