import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import IconButton, { Name as IconButtonName } from '@/components/icon_button';
import Input from '@/components/input';
import toast from '@/platform/toast';
import { PLAYER_PATH } from '@/constants/route';
import useHistory from '@/utils/use_history';
import Context from '../context';

const Style = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  > .input {
    width: 180px;
  }
`;

const Search = () => {
  const history = useHistory();
  const { searchWord } = useContext(Context);

  const [keyword, setKeyword] = useState('');
  const onSearch = () => {
    const k = keyword || searchWord;
    if (!k) {
      return toast.error('请输入搜索内容');
    }
    return history.push({
      pathname: PLAYER_PATH.SEARCH,
      query: { keyword: k },
    });
  };
  const onKeywordChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setKeyword(event.target.value);
  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Style>
      <Input
        className="input"
        value={keyword}
        onChange={onKeywordChange}
        onKeyDown={onKeyDown}
        placeholder={searchWord || '搜索'}
      />
      <IconButton name={IconButtonName.SEARCH_OUTLINE} />
    </Style>
  );
};

export default Search;
