import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import getMusicListRequest from '@/api/get_music_list';
import logger from '@/platform/logger';
import { SearchMusicKey } from '@/constant/music';
import dialog from '@/platform/dialog';
import Dialog from '@/component/dialog';
import CircularLoader from '@/component/circular_loader';
import eventemitter, { Type as EventType } from './eventemitter';

const Style = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OriginalMusicDialog = () => {
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const [id, setId] = useState('');

  useEffect(() => {
    const openListener = (i: string) => {
      setId(i);
      setOpen(true);
    };
    eventemitter.on(EventType.OPEN_ORIGINAL_MUSIC_DIALOG, openListener);
    return () =>
      void eventemitter.off(EventType.OPEN_ORIGINAL_MUSIC_DIALOG, openListener);
  }, []);
  useEffect(() => {
    let canceled = false;
    const getMusic = async () => {
      if (!id || !open) {
        return;
      }
      try {
        const [music] = await getMusicListRequest({
          key: SearchMusicKey.IDS,
          value: id,
        });
        if (!music) {
          throw new Error(`音乐不存在<ID:${id}>`);
        }
        if (!canceled) {
          eventemitter.emit(EventType.OPEN_MUSIC_DRAWER, music);
        }
      } catch (error) {
        logger.error(error, {
          description: '获取原曲失败',
          report: true,
        });
        if (!canceled) {
          dialog.alert({
            title: '获取原曲失败',
            content: error.message,
          });
        }
      }
      setOpen(false);
    };
    getMusic();

    return () => {
      canceled = true;
    };
  }, [open, id]);

  return (
    <Dialog open={open} onClose={onClose}>
      <Style>
        <CircularLoader />
      </Style>
    </Dialog>
  );
};

export default React.memo(OriginalMusicDialog);
