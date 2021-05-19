import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { NAME_MAX_LENGTH, ALIAS_MAX_LENGTH } from '@/constant/figure';
import parseSearch from '@/util/parse_search';
import useHistory from '@/util/use_history';
import Input from '@/component/input';
import Button, { Type } from '@/component/button';
import { Query } from '../constants';

const Style = styled.div`
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
    > .label {
      font-size: 14px;
      color: #333;
    }
    input {
      flex: 1;
    }
  }
`;

const Search = ({ loading }: { loading: boolean }) => {
  const history = useHistory();
  const location = useLocation();

  const nameInputRef = useRef<HTMLInputElement>();
  const aliasInputRef = useRef<HTMLInputElement>();
  const onSearch = () =>
    history.push({
      query: {
        [Query.SEARCH_NAME]: nameInputRef.current.value,
        [Query.SEARCH_ALIAS]: aliasInputRef.current.value,
      },
    });
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  useLayoutEffect(() => {
    const query = parseSearch<{ [key in Query]?: string }>(location.search);
    if (query[Query.SEARCH_NAME]) {
      nameInputRef.current.value = query[Query.SEARCH_NAME];
    }
    if (query[Query.SEARCH_ALIAS]) {
      aliasInputRef.current.value = query[Query.SEARCH_ALIAS];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Style>
      <div className="input">
        <div className="label">名字</div>
        <Input
          ref={nameInputRef}
          onKeyDown={onKeyDown}
          disabled={loading}
          maxLength={NAME_MAX_LENGTH}
        />
      </div>
      <div className="input">
        <div className="label">别名</div>
        <Input
          ref={aliasInputRef}
          onKeyDown={onKeyDown}
          disabled={loading}
          maxLength={ALIAS_MAX_LENGTH}
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
