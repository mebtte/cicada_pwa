import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { KEYWORD_MAX_LENGTH } from '@/apis/search_music';
import IconButton, { Name } from '@/components/icon_button';
import useHistory from '@/utils/use_history';
import { PLAYER_PATH } from '@/constants/route';
import toast from '@/platform/toast';
import Input from '@/components/input';
import Context from '../../context';
import useKeyboard from './use_keyboard';
import { Query } from '../../constants';

const Style = styled.div`
  -webkit-app-region: no-drag;
  display: flex;
  align-items: center;
  gap: 5px;
  > .keyword {
    width: 180px;
    margin-left: 5px;
  }
`;

const Wrapper = ({ keyword: initialKeyword }: { keyword: string }) => {
  const history = useHistory();
  const { searchWord } = useContext(Context);

  const [keyword, setKeyword] = useState(initialKeyword);
  const onKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(event.target.value);

  const onSearch = () => {
    const trimKeyword = keyword.trim() || searchWord;
    if (!trimKeyword) {
      return toast.error('请输入关键字');
    }
    return history.push({
      pathname: PLAYER_PATH.SEARCH,
      query: {
        [Query.KEYWORD]: trimKeyword,
        [Query.PAGE]: '1',
      },
    });
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };
  const onFocus = (event: React.FocusEvent<HTMLInputElement>) =>
    event.target.select();
  const inputRef = useKeyboard();

  return (
    <Style>
      <Input
        type="text"
        className="keyword"
        value={keyword}
        onChange={onKeywordChange}
        placeholder={searchWord || '搜索'}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        ref={inputRef}
        maxLength={KEYWORD_MAX_LENGTH}
      />
      <IconButton name={Name.SEARCH_OUTLINE} onClick={onSearch} />
    </Style>
  );
};

export default Wrapper;
