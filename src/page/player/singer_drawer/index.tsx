import React from 'react';
import styled from 'styled-components';

import Drawer from '@/component/drawer';
import useSingerDrawer from './use_singer_drawer';
import SingerInfo from './singer_info';
import MusicList from '../component/music_list';
import Action from './action';

const Content = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
`;
const bodyProps = {
  style: {
    width: 500,
    display: 'flex',
    flexDirection: 'column' as 'column',
    padding: 0,
  },
};
const musicListStyle = {
  flex: 1,
  minWidth: 0,
  marginLeft: 20,
};

const SingerDrawer = () => {
  const {
    open,
    onClose,
    singer,
    status,
    musicList,
    reload,
    addAllToPlaylist,
  } = useSingerDrawer();
  return (
    <Drawer open={open} onClose={onClose} bodyProps={bodyProps}>
      {singer ? <SingerInfo singer={singer} /> : null}
      <Content>
        <MusicList
          style={musicListStyle}
          status={status}
          musicList={musicList}
          reload={reload}
        />
        <Action
          status={status}
          reload={reload}
          addAllToPlaylist={addAllToPlaylist}
        />
      </Content>
    </Drawer>
  );
};

export default React.memo(SingerDrawer);
