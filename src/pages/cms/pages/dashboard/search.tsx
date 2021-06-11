import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import useHistory from '@/utils/use_history';
import Label from '@/components/label';
import Input from '@/components/input';
import IconButton, { Name } from '@/components/icon_button';
import { CMS_PATH } from '@/constants/route';
import { Query as MusicQuery } from '../music/constants';
import { Query as FigureQuery } from '../figure/constants';

const Style = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > .input {
    flex: 1;
  }
`;

const Search = () => {
  const history = useHistory();

  const musicRef = useRef<HTMLInputElement>();
  const onMusicSearch = () => {
    const { value } = musicRef.current;
    if (value) {
      return history.push({
        pathname: CMS_PATH.MUSIC,
        query: {
          [MusicQuery.SEARCH_VALUE]: value,
        },
      });
    }
    return history.push({ pathname: CMS_PATH.MUSIC });
  };
  const onMusicKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onMusicSearch();
    }
  };

  const figureRef = useRef<HTMLInputElement>();
  const onFigureSearch = () => {
    const { value } = figureRef.current;
    if (value) {
      return history.push({
        pathname: CMS_PATH.FIGURE,
        query: {
          [FigureQuery.SEARCH_VALUE]: value,
        },
      });
    }
    return history.push({ pathname: CMS_PATH.MUSIC });
  };
  const onFigureKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onFigureSearch();
    }
  };

  useLayoutEffect(() => {
    musicRef.current.focus();
  }, []);

  return (
    <Style>
      <Label label="搜索音乐">
        <InputBox>
          <Input className="input" ref={musicRef} onKeyDown={onMusicKeyDown} />
          <IconButton name={Name.SEARCH_OUTLINE} onClick={onMusicSearch} />
        </InputBox>
      </Label>
      <Label label="搜索角色">
        <InputBox>
          <Input
            className="input"
            ref={figureRef}
            onKeyDown={onFigureKeyDown}
          />
          <IconButton name={Name.SEARCH_OUTLINE} onClick={onFigureSearch} />
        </InputBox>
      </Label>
    </Style>
  );
};

export default Search;
