import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '@/components/input';
import Button, { Type } from '@/components/button';
import useHistory from '@/utils/use_history';
import Select from '@/components/select';
import {
  Query,
  SearchKey,
  SEARCH_KEY_MAP_LABEL,
  SEARCH_KEYS,
} from '../constants';

const Style = styled.div`
  z-index: 2;
  padding: 20px;
  display: flex;
  align-items: center;
  > .key {
    width: 120px;
    margin-right: 5px;
  }
  > .value {
    flex: 1;
    min-width: 0;
    margin-right: 20px;
  }
`;
const itemRenderer = (key: SearchKey, customInput: string) => {
  const target = SEARCH_KEY_MAP_LABEL[key];
  if (target.includes(customInput)) {
    return target;
  }
  return null;
};

const Search = ({
  searchKey,
  searchValue: initialSearchValue,
}: {
  searchKey: SearchKey;
  searchValue: string;
}) => {
  const history = useHistory();

  const onSearchKeyChange = (key: SearchKey) =>
    history.push({ query: { [Query.PAGE]: 1, [Query.SEARCH_KEY]: key } });

  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);
  const onSearch = () =>
    history.push({
      query: { [Query.PAGE]: 1, [Query.SEARCH_VALUE]: searchValue },
    });
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Style>
      <Select
        className="key"
        value={searchKey}
        onChange={onSearchKeyChange}
        array={SEARCH_KEYS}
        itemRenderer={itemRenderer}
      />
      <Input
        className="value"
        value={searchValue}
        onChange={onSearchValueChange}
        placeholder="输入搜索内容"
        onKeyDown={onKeyDown}
      />
      <Button label="搜索" type={Type.PRIMARY} onClick={onSearch} />
    </Style>
  );
};

export default Search;
