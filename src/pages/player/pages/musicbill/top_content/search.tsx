import React, { useEffect, useState } from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';

import CircularLoader from '@/components/circular_loader';
import Input from '@/components/input';
import IconButton, { Name } from '@/components/icon_button';
import eventemitter, { EventType } from '../eventemitter';
import { TopContent } from '../constants';

const Style = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > .input-box {
    position: relative;
    > .input {
      width: 250px;
    }
    > .loader {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }
`;
const switchToMusicbillInfo = () =>
  eventemitter.emit(EventType.TOP_CONTENT_CHANGE, {
    topContent: TopContent.INFO,
  });

const Search = ({ style }: { style: unknown }) => {
  const [loading, setLoading] = useState(false);

  const [keyword, setKeyword] = useState('');
  const onKeywordChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setKeyword(event.target.value);

  useEffect(() => {
    if (keyword) {
      setLoading(true);
      const timer = window.setTimeout(() => {
        setLoading(false);
        eventemitter.emit(EventType.KEYWORD_CHANGE, { keyword });
      }, 1000);
      return () => window.clearTimeout(timer);
    }

    setLoading(false);
    eventemitter.emit(EventType.KEYWORD_CHANGE, { keyword: '' });
  }, [keyword]);

  return (
    <Style style={style}>
      <div className="input-box">
        <Input className="input" value={keyword} onChange={onKeywordChange} />
        {loading ? <CircularLoader className="loader" size={16} /> : null}
      </div>
      <IconButton name={Name.DOWN_OUTLINE} onClick={switchToMusicbillInfo} />
    </Style>
  );
};

export default Search;
