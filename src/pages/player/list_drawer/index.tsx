import React, { useState, useCallback, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';

import dialog from '@/platform/dialog';
import Drawer from '@/components/drawer';
import eventemitter, { Type as EventType } from '../eventemitter';
import { TAB } from './constant';
import Context from '../context';
import Tab from './tab';
import Playlist from './playlist';
import Playqueue from './playqueue';

const Container = styled.div`
  flex: 1;
  min-height: 0;
  position: relative;
`;
const AnimatedDiv = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const bodyProps = {
  style: {
    width: 450,
    display: 'flex',
    flexDirection: 'column' as 'column',
  },
};
const TRANSITION = {
  from: { opacity: 0, transform: 'translateX(100%)' },
  enter: { opacity: 1, transform: 'translateX(0)' },
  leave: { opacity: 0, transform: 'translateX(-100%)' },
};

const MusicDrawer = () => {
  const [open, setOpen] = useState(false);
  const onClose = useCallback(() => setOpen(false), []);
  const { playlist } = useContext(Context);
  const onClearPlaylist = useCallback(
    () =>
      dialog.confirm({
        title: '确定清空播放列表吗?',
        onConfirm: () =>
          void eventemitter.emit(EventType.ACTION_CLEAR_PLAYLIST),
      }),
    [],
  );

  useEffect(() => {
    const openListener = () => setOpen(true);
    const toggleListener = () => setOpen((o) => !o);
    eventemitter.on(EventType.OPEN_PLAYLIST_PLAYQUEUE_DRAWER, openListener);
    eventemitter.on(EventType.TOGGLE_PLAYLIST_PLAYQUEUE_DRAWER, toggleListener);
    return () => {
      eventemitter.off(EventType.OPEN_PLAYLIST_PLAYQUEUE_DRAWER, openListener);
      eventemitter.off(
        EventType.TOGGLE_PLAYLIST_PLAYQUEUE_DRAWER,
        toggleListener,
      );
    };
  }, []);
  const [tab, setTab] = useState(TAB.PLAYLIST);
  const onTabChange = useCallback((t) => setTab(t), []);
  // @ts-ignore
  const transtions = useTransition(tab, null, TRANSITION);
  return (
    <Drawer open={open} onClose={onClose} bodyProps={bodyProps}>
      <Tab tab={tab} onChange={onTabChange} />
      <Container>
        {transtions.map(({ item: t, key, props: style }) => {
          let content = null;
          switch (t) {
            case TAB.PLAYLIST: {
              content = (
                <Playlist playlist={playlist} onClear={onClearPlaylist} />
              );
              break;
            }
            case TAB.PLAYQUEUE: {
              content = <Playqueue />;
              break;
            }
            default:
              content = null;
          }
          return (
            <AnimatedDiv key={key} style={style}>
              {content}
            </AnimatedDiv>
          );
        })}
      </Container>
    </Drawer>
  );
};

export default React.memo(MusicDrawer);
