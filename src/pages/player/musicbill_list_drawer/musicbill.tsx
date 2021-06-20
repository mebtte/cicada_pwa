import React, { useCallback } from 'react';

import { RequestStatus } from '@/constants';
import toast from '@/platform/toast';
import Avatar from '@/components/avatar';
import Checkbox from '@/components/checkbox';
import CircularLoader from '@/components/circular_loader';
import Icon, { Name } from '@/components/icon';
import playerEventemitter, {
  EventType as PlayerEventType,
} from '../eventemitter';
import MusicbillContainer from './musicbill_container';
import { COVER_SIZE, COVER_STYLE, ICON_SIZE, ICON_STYLE } from './constant';
import { Music as MusicType, Musicbill as MusicbillType } from '../constants';

const Musicbill = ({
  music,
  musicbill,
}: {
  music?: MusicType;
  musicbill: MusicbillType;
}) => {
  const onToggleMusicbill = useCallback(() => {
    const { status } = musicbill;
    if (status === RequestStatus.LOADING) {
      return toast.info('请等待歌单加载完毕...');
    }
    if (status === RequestStatus.NOT_START || status === RequestStatus.ERROR) {
      return playerEventemitter.emit(PlayerEventType.FETCH_MUSICBILL, {
        id: musicbill.id,
      });
    }
    const checked = !!musicbill.musicList.find((m) => m.music.id === music.id);
    if (checked) {
      return playerEventemitter.emit(
        PlayerEventType.REMOVE_MUSIC_FROM_MUSICBILL,
        { musicbill, music },
      );
    }
    return playerEventemitter.emit(PlayerEventType.ADD_MUSIC_TO_MUSICBILL, {
      musicbill,
      music,
    });
  }, [musicbill, music]);
  const { cover, name, musicList, status } = musicbill;

  let icon = null;
  if (status === RequestStatus.SUCCESS) {
    const checked = music && !!musicList.find((m) => m.music.id === music.id);
    icon = <Checkbox checked={checked} size={ICON_SIZE} />;
  } else if (status === RequestStatus.LOADING) {
    icon = <CircularLoader size={ICON_SIZE} style={ICON_STYLE} />;
  } else {
    icon = (
      <Icon name={Name.QUESTION_FILL} size={ICON_SIZE} style={ICON_STYLE} />
    );
  }
  return (
    <MusicbillContainer onClick={onToggleMusicbill}>
      {icon}
      <Avatar src={cover} size={COVER_SIZE} style={COVER_STYLE} />
      <div className="name">{name}</div>
    </MusicbillContainer>
  );
};

export default Musicbill;
