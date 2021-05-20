import React, { useState, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { PLAYER_PATH } from '@/constant/route';
import toast from '@/platform/toast';
import Input from '@/components/input';
import IconButton, { Name } from '@/components/icon_button';
import Context from '../../context';
import useKeyword from './use_keyboard';

const Style = styled.div`
  -webkit-app-region: no-drag;
  display: flex;
  align-items: center;
  > .input {
    width: 200px;
    margin-right: 5px;
  }
`;

const Wrapper = () => {
  const history = useHistory();

  const { searchWord } = useContext(Context);
  const [keyword, setKeyword] = useState('');
  const onKeywordChange = useCallback(
    (event) => setKeyword(event.target.value),
    [],
  );

  const onSearch = (k) => {
    const actualKeyword = k.trim() || searchWord;
    if (!actualKeyword) {
      return toast.error('请输入关键字');
    }
    return history.push(
      `${PLAYER_PATH.SEARCH}?keyword=${encodeURIComponent(actualKeyword)}`,
    );
  };
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch(keyword);
    }
  };
  const onFocus = useCallback(
    (event: React.FocusEvent) => (event.target as HTMLInputElement).select(),
    [],
  );
  const inputRef = useKeyword();

  return (
    <Style>
      <Input
        type="text"
        className="input"
        value={keyword}
        onChange={onKeywordChange}
        placeholder={searchWord || '搜索音乐/歌手'}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        ref={inputRef}
      />
      <IconButton
        name={Name.SEARCH_OUTLINE}
        onClick={() => onSearch(keyword)}
      />
    </Style>
  );
};

export default Wrapper;
