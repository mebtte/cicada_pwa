import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import useQuery from '@/util/use_query';
import toast from '../../../../../platform/toast';
import { CMS_PATH } from '../../../../../constant/route';
import Input from '../../../../../component/input';
import IconButton, { Name } from '../../../../../component/icon_button';

const Style = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > .input {
    flex: 1;
    margin-right: 5px;
  }
`;

const SearchBox = () => {
  const history = useHistory();
  const { keyword: k, figure } = useQuery<{
    keyword?: string;
    figure?: string;
  }>();

  const [keyword, setKeyword] = useState(k || '');
  const onKeywordChange = useCallback(
    (event) => setKeyword(event.target.value),
    [],
  );

  const onSearch = () => {
    if (!keyword) {
      return toast.error('请输入关键词');
    }
    return history.push(
      `${CMS_PATH.FIGURE}?keyword=${encodeURIComponent(keyword)}${
        figure ? `&figure=${figure}` : ''
      }`,
    );
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Style>
      <Input
        value={keyword}
        onChange={onKeywordChange}
        className="input"
        type="search"
        placeholder="搜索角色"
        onKeyDown={onKeyDown}
      />
      <IconButton name={Name.SEARCH_OUTLINE} onClick={onSearch} />
    </Style>
  );
};

export default SearchBox;
