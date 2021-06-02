import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { IS_WINDOWS, IS_MAC_OS } from '@/constants';
import keyboardHandlerWrapper from '@/utils/keyboard_handler_wrapper';
import {
  SearchKey,
  SEARCH_KEY_MAP_LABEL,
  SEARCH_KEYS,
} from '@/apis/cms_get_music_list';
import Input from '@/components/input';
import Button, { Type } from '@/components/button';
import useHistory from '@/utils/use_history';
import Select from '@/components/select';
import { Query } from '../constants';

const Style = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  > .key {
    width: 150px;
    margin-right: 5px;
  }
  > .value {
    flex: 1;
    min-width: 0;
    margin-right: 20px;
  }
`;
const itemRenderer = (key: SearchKey | null) => {
  if (!key) {
    return null;
  }
  return SEARCH_KEY_MAP_LABEL[key];
};

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
  const inputRef = useRef<HTMLInputElement>();

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

  useEffect(() => {
    const onDocumentKeyDown = keyboardHandlerWrapper((event: KeyboardEvent) => {
      if (
        event.key !== 'f' ||
        (IS_MAC_OS && !event.metaKey) ||
        (IS_WINDOWS && !event.ctrlKey)
      ) {
        return;
      }
      event.preventDefault();
      return inputRef.current.focus();
    });
    document.addEventListener('keydown', onDocumentKeyDown);
    return () => document.removeEventListener('keydown', onDocumentKeyDown);
  }, []);

  return (
    <Style>
      <Select
        className="key"
        value={searchKey}
        onChange={onSearchKeyChange}
        array={SEARCH_KEYS}
        itemRenderer={itemRenderer}
        disabled={loading}
        customInputDisabled
      />
      <Input
        className="value"
        value={searchValue}
        onChange={onSearchValueChange}
        placeholder="输入搜索内容"
        onKeyDown={onKeyDown}
        disabled={loading}
        ref={inputRef}
      />
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
