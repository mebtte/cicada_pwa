import React, { useState, useCallback, useContext } from 'react';
import styled from 'styled-components';

import { SearchKey, SEARCH_KEYS, SEARCH_KEY_MAP } from '@/apis/search_music';
import Select from '@/components/select';
import useHistory from '@/utils/use_history';
import { PLAYER_PATH } from '@/constants/route';
import toast from '@/platform/toast';
import Input from '@/components/input';
import Context from '../../context';
import useKeyword from './use_keyboard';
import { Query } from '../../constants';

const Style = styled.div`
  -webkit-app-region: no-drag;
  display: flex;
  align-items: center;
  > .search-key {
    width: 80px;
  }
  > .search-value {
    width: 180px;
    margin-left: 5px;
  }
`;
const searchKeyItemRenderer = (searchKey: SearchKey, customInput: string) => {
  const { label } = SEARCH_KEY_MAP[searchKey];
  if (label.includes(customInput)) {
    return label;
  }
  return null;
};

const Wrapper = ({
  searchKey,
  searchValue: initialSearchValue,
}: {
  searchKey: SearchKey;
  searchValue: string;
}) => {
  const history = useHistory();

  const { searchWord } = useContext(Context);
  const onSearchKeyChange = (sk: SearchKey) =>
    history.push({ query: { [Query.SEARCH_KEY]: sk } });

  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const onSearch = () => {
    const trimSearchValue = searchValue.trim() || searchWord;
    if (!trimSearchValue) {
      return toast.error('请输入关键字');
    }
    return history.push({
      pathname: PLAYER_PATH.SEARCH,
      query: {
        [Query.SEARCH_VALUE]: trimSearchValue,
      },
    });
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };
  const onFocus = useCallback(
    (event: React.FocusEvent) => (event.target as HTMLInputElement).select(),
    [],
  );
  const inputRef = useKeyword();

  return (
    <Style>
      <Select
        className="search-key"
        value={searchKey}
        onChange={onSearchKeyChange}
        array={SEARCH_KEYS}
        itemRenderer={searchKeyItemRenderer}
      />
      <Input
        type="text"
        className="search-value"
        value={searchValue}
        onChange={onSearchValueChange}
        placeholder={searchWord || '搜索'}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        ref={inputRef}
      />
    </Style>
  );
};

export default Wrapper;
