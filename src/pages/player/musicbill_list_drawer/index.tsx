import React, {
  useMemo,
  useState,
  useCallback,
  useEffect,
  useContext,
} from 'react';

import { RequestStatus } from '@/constants';
import { Music as MusicType } from '@/constants/music';
import LoadingCard from '@/components/loading_card';
import ErrorCard from '@/components/error_card';
import Drawer, { Title } from '@/components/drawer';
import MusicbillList from './musicbill_list';
import eventemitter, { Type as EventType } from '../eventemitter';
import Context from '../context';
import MusicInfo from '../components/music_info';

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

const MusicbillListDrawer = () => {
  const { getMusicbillListStatus: status, musicbillList } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [music, setMusic] = useState<MusicType>(null);
  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const openListener = (m: MusicType) => {
      setOpen(true);
      setMusic(m);
    };
    const closeListener = () => setOpen(false);
    eventemitter.on(EventType.OPEN_MUSICBILL_LIST_DRAWER, openListener);
    eventemitter.on(EventType.OPEN_MUSIC_DRAWER, closeListener);
    eventemitter.on(EventType.OPEN_SINGER_DRAWER, closeListener);
    return () => {
      eventemitter.off(EventType.OPEN_MUSICBILL_LIST_DRAWER, openListener);
      eventemitter.off(EventType.OPEN_MUSIC_DRAWER, closeListener);
      eventemitter.off(EventType.OPEN_SINGER_DRAWER, closeListener);
    };
  }, []);

  let content = null;
  if (status === RequestStatus.SUCCESS) {
    content = <MusicbillList music={music} musicbillList={musicbillList} />;
  } else if (status === RequestStatus.LOADING) {
    content = <LoadingCard message="正在获取歌单列表..." style={cardStyle} />;
  } else {
    content = (
      <ErrorCard
        errorMessage="获取歌单列表失败"
        retry={reloadMusicbillList}
        style={cardStyle}
      />
    );
  }
  return (
    <Drawer open={open} onClose={onClose} bodyProps={bodyProps}>
      <Title>添加到歌单</Title>
      {useMemo(
        () =>
          music ? <MusicInfo music={music} style={musicInfoStyle} /> : null,
        [music],
      )}
      {content}
    </Drawer>
  );
};

export default React.memo(MusicbillListDrawer);
