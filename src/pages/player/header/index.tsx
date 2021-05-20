import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from '@/component/avatar';
import { PLAYER_PATH } from '@/constant/route';
import { IS_ELECTRON, IS_WINDOWS } from '@/constant';
import parseSearch from '@/utils/parse_search';
import {
  minimizePlayerWindow,
  hidePlayerWindow,
} from '@/platform/electron_new';
import IconButton, { Name } from '@/component/icon_button';
import Search from './search';
import Title from './title';

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
  marginLeft: 5,
  WebkitAppRegion: 'no-drag',
};

const Header = () => {
  const { pathname, search } = useLocation();

  let title = null;
  switch (pathname) {
    case PLAYER_PATH.SEARCH: {
      const { keyword } = parseSearch(search);
      if (keyword) {
        title = `搜索"${decodeURIComponent(keyword)}"`;
      } else {
        title = '搜索';
      }
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
      <Search />
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
