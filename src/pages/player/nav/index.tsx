import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import IconButton, { Name as IconButtonName } from '@/components/icon_button';
import eventemitter, { EventType } from '../eventemitter';
import Logo from './logo';
import Context from '../context';
import Search from './search';

const Style = styled.div<{ smallView: boolean }>`
  height: 45px;

  display: flex;
  align-items: center;

  > .blank {
    flex: 1;
    min-width: 0;
  }

  ${({ smallView }) => css`
    padding: ${smallView ? '5px 15px 0 15px' : '5px 20px 0 20px'};
  `}
`;

const openSidebar = () => eventemitter.emit(EventType.OPEN_SIDEBAR, {});

const Nav = () => {
  const { smallView } = useContext(Context);
  return (
    <Style smallView={smallView}>
      {smallView ? (
        <IconButton name={IconButtonName.MENU_OUTLINE} onClick={openSidebar} />
      ) : (
        <Logo />
      )}
      <div className="blank" />
      <Search />
    </Style>
  );
};

export default Nav;
