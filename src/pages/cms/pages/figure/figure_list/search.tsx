import React, { useState } from 'react';
import styled from 'styled-components';

import Select from '@/components/select';
import useHistory from '@/utils/use_history';
import Input from '@/components/input';
import Button, { Type } from '@/components/button';
import {
  Query,
  SearchKey,
  SEARCH_KEYS,
  SEARCH_KEY_MAP_LALEL,
} from '../constants';

const Style = styled.div`
  z-index: 2;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  > .input {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 5px;
    > .key {
      width: 100px;
    }
    > .value {
      flex: 1;
      min-width: 0;
    }
  }
`;
const itemRenderer = (key: SearchKey) => SEARCH_KEY_MAP_LALEL[key];

const Search = ({
  searchKey,
  searchValue: initialSearchValue,
  loading,
}: {
  searchKey: SearchKey;
  searchValue: string;
  loading: boolean;
}) => {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);
  const onSearch = () =>
    history.push({
      query: {
        [Query.SEARCH_VALUE]: searchValue,
        [Query.PAGE]: 1,
      },
    });
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };
  const onSearchKeyChange = (key: SearchKey) =>
    history.push({
      query: {
        [Query.SEARCH_KEY]: key,
      },
    });

  return (
    <Style>
      <div className="input">
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
          onKeyDown={onKeyDown}
          placeholder="输入搜索内容"
        />
      </div>
      <Button
        label="搜索"
        type={Type.PRIMARY}
        onClick={onSearch}
        loading={loading}
      />
    </Style>
  );
};

export default Search;
