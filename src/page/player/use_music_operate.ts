import { useCallback } from 'react';

import config from '@/config';
import openLink from '@/util/open_link';
import recordDownloadLog from '@/api/record_download_log';
import logger from '@/platform/logger';
import { Music as MusicType, DownloadType } from '@/constant/music';
import eventemitter, { Type as EventType } from './eventemitter';

export default (music?: MusicType, afterOperate?: (...params: any) => any) => {
  const onView = useCallback(() => {
    if (!music) {
      return;
    }
    eventemitter.emit(EventType.OPEN_MUSIC_DRAWER, music);
  }, [music]);
  const onPlay = useCallback(() => {
    if (!music) {
      return;
    }
    eventemitter.emit(EventType.ACTION_PLAY_MUSIC, music);
    if (afterOperate) {
      afterOperate();
    }
  }, [music, afterOperate]);
  const onAddToPlayqueue = useCallback(() => {
    if (!music) {
      return;
    }
    eventemitter.emit(EventType.ACTION_INSERT_MUSIC_TO_PLAYQUEUE, music);
    if (afterOperate) {
      afterOperate();
    }
  }, [music, afterOperate]);
  const onAddToMusicbill = useCallback(() => {
    if (!music) {
      return;
    }
    eventemitter.emit(EventType.OPEN_MUSICBILL_LIST_DRAWER, music);
    if (afterOperate) {
      afterOperate();
    }
  }, [music, afterOperate]);
  const onAddToPlaylist = useCallback(() => {
    if (!music) {
      return;
    }
    eventemitter.emit(EventType.ACTION_ADD_MUSIC_LIST_TO_PLAYLIST, [music]);
    if (afterOperate) {
      afterOperate();
    }
  }, [music, afterOperate]);
  const onDownloadNormal = useCallback(() => {
    if (!music) {
      return;
    }
    recordDownloadLog({
      id: music.id,
      type: DownloadType.NORMAL,
    }).catch((error) =>
      logger.error(error, {
        description: '下载音乐记录失败',
        report: true,
      }),
    );
    openLink(
      `${config.apiOrigin}/1/dynamic/music?id=${music.id}&type=${DownloadType.NORMAL}`,
    );
    if (afterOperate) {
      afterOperate();
    }
  }, [music, afterOperate]);
  const onDownloadAccompany = useCallback(() => {
    if (!music) {
      return;
    }
    if (afterOperate) {
      setTimeout(afterOperate, 0);
    }
    recordDownloadLog({
      id: music.id,
      type: DownloadType.ACCOMPANY,
    }).catch((error) =>
      logger.error(error, {
        description: '下载音乐记录失败',
        report: true,
      }),
    );
    return openLink(
      `${config.apiOrigin}/1/dynamic/music?id=${music.id}&type=${DownloadType.ACCOMPANY}`,
    );
  }, [music, afterOperate]);
  const onDownloadHQ = useCallback(() => {
    if (!music) {
      return;
    }
    if (afterOperate) {
      setTimeout(afterOperate, 0);
    }
    recordDownloadLog({
      id: music.id,
      type: DownloadType.HQ,
    }).catch((error) =>
      logger.error(error, {
        description: '下载音乐记录失败',
        report: true,
      }),
    );
    return openLink(
      `${config.apiOrigin}/1/dynamic/music?id=${music.id}&type=${DownloadType.HQ}`,
    );
  }, [music, afterOperate]);
  const onWatchMv = useCallback(() => {
    if (!music) {
      return;
    }
    if (afterOperate) {
      setTimeout(afterOperate, 0);
    }
    return void eventemitter.emit(EventType.OPEN_MV_DIALOG, music);
  }, [music, afterOperate]);
  const onOperate = useCallback(() => {
    if (!music) {
      return;
    }
    return eventemitter.emit(EventType.OPEN_MUSIC_OPERATE_POPUP, music);
  }, [music]);

  return {
    onView,
    onPlay,
    onAddToPlayqueue,
    onAddToMusicbill,
    onAddToPlaylist,
    onDownloadNormal,
    onDownloadAccompany,
    onDownloadHQ,
    onWatchMv,
    onOperate,
  };
};
