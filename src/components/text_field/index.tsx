import React, { HTMLAttributes, ComponentProps } from 'react';
import styled from 'styled-components';

import Input from '../input';
import Textarea from '../textarea';

const Style = styled.div`
  > .label {
    font-size: 12px;
    color: rgb(155 155 155);
  }
  > .input {
    margin-top: 8px;
    input,
    textarea {
      width: 100%;
    }
  }
`;

const TextField = ({
  textarea = false,
  inputProps,
  label,
  ...props
}: (
  | {
      textarea: true;
      inputProps: ComponentProps<typeof Textarea>;
    }
  | {
      textarea?: false;
      inputProps: ComponentProps<typeof Input>;
    }
) &
  HTMLAttributes<HTMLDivElement> & {
    label: string;
  }) => (
  // eslint-disable-next-line react/jsx-indent
  <Style {...props}>
    <div className="label">{label}</div>
    <div className="input">
      {/* @ts-expect-error */}
      {textarea ? <Textarea {...inputProps} /> : <Input {...inputProps} />}
    </div>
  </Style>
);

export default TextField;
