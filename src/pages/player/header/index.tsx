import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { SearchKey, SEARCH_KEYS } from '@/apis/search_music';
import useQuery from '@/utils/use_query';
import Avatar from '@/components/avatar';
import { PLAYER_PATH } from '@/constants/route';
import { IS_ELECTRON, IS_WINDOWS } from '@/constants';
import {
  minimizePlayerWindow,
  hidePlayerWindow,
} from '@/platform/electron_new';
import IconButton, { Name } from '@/components/icon_button';
import Search from './search';
import Title from './title';
import { Query, QueryObject } from '../constants';

const Style = styled.div`
  z-index: 2;
  height: 64px;
  display: flex;
  align-items: flex-end;
  padding: 0 20px 10px 20px;
  box-sizing: border-box;
  -webkit-app-region: drag;
`;
const actionStyle = {
  marginLeft: 10,
  WebkitAppRegion: 'no-drag',
};

const Header = () => {
  const { pathname } = useLocation();
  const query = useQuery<QueryObject>();

  let searchKey = query[Query.SEARCH_KEY] as SearchKey;
  if (!SEARCH_KEYS.includes(searchKey)) {
    searchKey = SearchKey.MUSIC_NAME;
  }
  const searchValue = query[Query.SEARCH_VALUE] || '';

  let title = null;
  switch (pathname) {
    case PLAYER_PATH.SEARCH: {
      title = `搜索"${query[Query.SEARCH_VALUE]}"`;
      break;
    }
    case PLAYER_PATH.SETTING: {
      title = '设置';
      break;
    }
    case PLAYER_PATH.PROFILE: {
      title = '个人资料';
      break;
    }
    default:
      title = '知了';
  }
  return (
    <Style>
      <Avatar animated src="/logo.png" size={32} />
      <Title title={title} />
      <Search searchKey={searchKey} searchValue={searchValue} />
      {IS_ELECTRON && IS_WINDOWS ? (
        <>
          <IconButton
            name={Name.MINIMIZE_OUTLINE}
            style={actionStyle}
            onClick={minimizePlayerWindow}
          />
          <IconButton
            name={Name.WRONG_OUTLINE}
            style={actionStyle}
            onClick={hidePlayerWindow}
          />
        </>
      ) : null}
    </Style>
  );
};

export default React.memo(Header);
