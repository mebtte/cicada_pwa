import React from 'react';
import styled from 'styled-components';

import Drawer from '@/components/drawer';
import useMusicList from './use_music_list';
import SingerInfo from './singer_info';
import MusicList from './music_list';
import Action from './action';
import { Figure } from '../constants';

const Content = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
`;
const bodyProps = {
  style: {
    width: 550,
    display: 'flex',
    flexDirection: 'column' as 'column',
    padding: 0,
  },
};

const SingerDrawer = ({
  open,
  onClose,
  singer,
}: {
  open: boolean;
  onClose: () => void;
  singer: Figure;
}) => {
  const { musicList, reload } = useMusicList({ singer });
  return (
    <Drawer open={open} onClose={onClose} bodyProps={bodyProps}>
      {singer ? <SingerInfo singer={singer} /> : null}
      <Content>
        <MusicList musicList={musicList} reload={reload} />
        <Action singer={singer} musicList={musicList} reload={reload} />
      </Content>
    </Drawer>
  );
};

export default React.memo(SingerDrawer);
