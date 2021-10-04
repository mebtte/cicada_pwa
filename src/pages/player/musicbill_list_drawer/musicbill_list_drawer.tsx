import React, { useContext } from 'react';

import LoadingCard from '@/components/loading_card';
import ErrorCard from '@/components/error_card';
import Drawer, { Title } from '@/components/horizontal_drawer';
import MusicbillList from './musicbill_list';
import eventemitter, { EventType } from '../eventemitter';
import Context from '../context';
import MusicInfo from '../components/music_info';
import { Music as MusicType } from '../constants';

const bodyProps = {
  style: {
    width: 300,
    display: 'flex',
    flexDirection: 'column' as 'column',
  },
};
const musicInfoStyle = {
  padding: '0 20px',
  marginBottom: 20,
};
const cardStyle = {
  flex: 1,
};
const reloadMusicbillList = () =>
  eventemitter.emit(EventType.RELOAD_MUSICBILL_LIST);

const MusicbillListDrawer = ({
  open,
  onClose,
  music,
}: {
  open: boolean;
  onClose: () => void;
  music: MusicType;
}) => {
  const { musicbillList } = useContext(Context);

  // eslint-disable-next-line no-nested-ternary
  const content = musicbillList.error ? (
    <ErrorCard
      errorMessage={musicbillList.error.message}
      retry={reloadMusicbillList}
      style={cardStyle}
    />
  ) : musicbillList.loading ? (
    <LoadingCard message="正在获取歌单列表..." style={cardStyle} />
  ) : (
    <MusicbillList music={music} musicbillList={musicbillList.value} />
  );
  return (
    <Drawer open={open} onClose={onClose} bodyProps={bodyProps}>
      <Title>添加到歌单</Title>
      <MusicInfo music={music} style={musicInfoStyle} />
      {content}
    </Drawer>
  );
};

export default React.memo(MusicbillListDrawer);
