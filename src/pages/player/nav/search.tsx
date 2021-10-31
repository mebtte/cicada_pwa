import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { IS_MAC_OS, IS_WINDOWS } from '@/constants';
import keyboardHandlerWrapper from '@/utils/keyboard_handler_wrapper';
import IconButton, { Name as IconButtonName } from '@/components/icon_button';
import Input from '@/components/input';
import toast from '@/platform/toast';
import { PLAYER_PATH } from '@/constants/route';
import useHistory from '@/utils/use_history';
import Context from '../context';

const Style = styled.div<{ smallView: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;

  ${({ smallView }) => css`
    > .input {
      width: ${smallView ? 160 : 180}px;
    }
  `}
`;

const Search = () => {
  const history = useHistory();
  const { smallView, searchWord } = useContext(Context);

  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    const onKeydown = keyboardHandlerWrapper((event: KeyboardEvent) => {
      if (
        event.key === 'f' &&
        ((IS_MAC_OS && event.metaKey) || (IS_WINDOWS && event.ctrlKey))
      ) {
        event.preventDefault();
        inputRef.current!.focus();
      }
    });
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  return (
    <Style smallView={smallView}>
      <Input
        className="input"
        value={keyword}
        onChange={onKeywordChange}
        onKeyDown={onKeyDown}
        placeholder={searchWord || '搜索'}
        ref={inputRef}
      />
      <IconButton name={IconButtonName.SEARCH_OUTLINE} onClick={onSearch} />
    </Style>
  );
};

export default Search;
