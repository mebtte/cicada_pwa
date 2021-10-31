import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';

import openLink from '@/utils/open_link';
import { ELECTRON_GITHUB_REPOSITORY, IS_ELECTRON } from '@/constants';
import { Name as IconName } from '@/components/icon';
import { PLAYER_PATH } from '@/constants/route';
import MenuItem from '@/components/menu_item';
import Context from '../../context';
import useHistory from '@/utils/use_history';

const Style = styled.div``;

const Menu = () => {
  const history = useHistory();
  const location = useLocation();

  const { smallView } = useContext(Context);
  return (
    <Style>
      <MenuItem
        icon={IconName.DISCOVER_OUTLINE}
        label="发现"
        active={location.pathname === PLAYER_PATH.DISCOVER}
        onClick={() => history.push({ pathname: PLAYER_PATH.DISCOVER })}
      />
      <MenuItem
        icon={IconName.SETTING_OUTLINE}
        label="设置"
        active={location.pathname === PLAYER_PATH.SETTING}
        onClick={() => history.push({ pathname: PLAYER_PATH.SETTING })}
      />
      {smallView || IS_ELECTRON ? null : (
        <MenuItem
          icon={IconName.DOWNLOAD_OUTLINE}
          label="桌面客户端"
          onClick={(e) => {
            e.preventDefault();
            return openLink(ELECTRON_GITHUB_REPOSITORY);
          }}
        />
      )}
    </Style>
  );
};

export default Menu;
