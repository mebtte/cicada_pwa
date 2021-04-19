import React from 'react';
import styled from 'styled-components';

import Input from '../../../../component/input';

const Style = styled.div`
  margin: 20px 30px;
  display: flex;
  align-items: center;
  > .label {
    font-size: 14px;
    width: 50px;
    font-weight: bold;
  }
  > .input {
    flex: 1;
    min-width: 0;
  }
`;

const TextField = ({
  disabled = false,
  label,
  value,
  onChange,
  maxLength = 255,
}: {
  disabled?: boolean;
  label: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}) => {
  return (
    <Style>
      <div className="label">{label}</div>
      <Input
        className="input"
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        disabled={disabled}
      />
    </Style>
  );
};

export default TextField;
