import React, { useContext } from 'react';
import styled from 'styled-components';

import openLink from '@/utils/open_link';
import { ELECTRON_GITHUB_REPOSITORY, IS_ELECTRON } from '@/constants';
import { Name as IconName } from '@/components/icon';
import { PLAYER_PATH } from '@/constants/route';
import MenuItem from './menu_item';
import Context from '../../../context';

const Style = styled.div``;

const Menu = () => {
  const { smallView } = useContext(Context);
  return (
    <Style>
      <MenuItem
        icon={IconName.RECOMMEND_FILL}
        label="发现"
        to={PLAYER_PATH.DISCOVER}
      />
      <MenuItem
        icon={IconName.SETTING_OUTLINE}
        label="设置"
        to={PLAYER_PATH.SETTING}
      />
      {smallView || IS_ELECTRON ? null : (
        <MenuItem
          icon={IconName.PC_OUTLINE}
          label="桌面客户端"
          to="/desktop_client"
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
