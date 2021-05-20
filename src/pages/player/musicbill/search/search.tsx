import React, {
  useState,
  useRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import { ComponentSize } from '@/constant/style';
import Input from '@/components/input';
import IconButton, { Name } from '@/components/icon_button';
import Tooltip from '@/components/tooltip';
import CircularLoader from '@/components/circular_loader';
import Avatar, { Shape } from '@/components/avatar';
import eventemitter, { Type as EventType } from '../eventemitter';
import { TOP_CONTENT_HEIGHT, TopContent } from '../constant';

const onHide = () =>
  eventemitter.emit(EventType.TOP_CONTENT_CHANGE, TopContent.INFO);

const Style = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${TOP_CONTENT_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  > .input-box {
    margin-left: 15px;
    position: relative;
    width: 50%;
    > .input {
      width: 100%;
    }
    > .loader {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }
  > .action {
    margin-left: 10px;
  }
`;

interface Props {
  cover: string;
  [key: string]: any;
}

const Search = React.forwardRef<
  {
    focus: () => void;
  },
  Props
>(({ cover, ...props }: Props, ref) => {
  const inputRef = useRef<HTMLInputElement>();
  const [loading, setLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const onChange = useCallback(() => {
    clearTimeout(timer.current);
    const { value } = inputRef.current;
    if (!value) {
      setLoading(false);
      return eventemitter.emit(EventType.KEYWORD_CHANGE, value);
    }
    setLoading(true);
    timer.current = setTimeout(() => {
      setLoading(false);
      eventemitter.emit(EventType.KEYWORD_CHANGE, value);
    }, 1000);
  }, []);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return (
    <Style {...props}>
      <Avatar
        animated
        src={cover}
        size={ComponentSize.NORMAL}
        shape={Shape.CIRCLE}
      />
      <div className="input-box">
        <Input
          className="input"
          ref={inputRef}
          onChange={onChange}
          placeholder="歌单内搜索"
        />
        {loading ? <CircularLoader className="loader" size={16} /> : null}
      </div>
      <Tooltip title="收起">
        <IconButton
          name={Name.DOWN_OUTLINE}
          className="action"
          onClick={onHide}
        />
      </Tooltip>
    </Style>
  );
});

export default Search;
