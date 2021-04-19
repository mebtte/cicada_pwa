import React from 'react';
import styled from 'styled-components';

import scrollbar from '@/style/scrollbar';
import withSignin from '@/platform/with_signin';
import electron from '@/platform/electron';
import RouteContainer from '../route_container';
import Sidebar from './sidebar';
import Header from './header';
import Controller from './controller';
import Route from './route';
import useMusicbillList from './use_musicbill_list';
import useAudioState from './use_audio_state';
import usePlaylist from './use_playlist';
import usePlayqueue from './use_playqueue';
import usePlayMode from './use_play_mode';
import useSearchWord from './use_search_word';
import useVolume from './use_volume';
import Context from './context';
import Audio from './audio';
import Electron from './electron';
import MediaSession from './media_session';
import PlayLog from './play_log';
import SingerDrawer from './singer_drawer';
import MusicOperatePopup from './music_operate_popup';
import MusicDrawer from './music_drawer';
import ListDrawer from './list_drawer';
import MusicbillListDrawer from './musicbill_list_drawer';
import MusicbillOrderDrawer from './musicbilll_order_drawer';
import NewMusicbillDialog from './new_musicbill_dialog';
import OriginalMusicDialog from './original_music_dialog';
import MvDialog from './mv_dialog';

const Scrollable = styled(RouteContainer)`
  overflow: auto;
  ${scrollbar};
`;
const Style = styled.div`
  min-width: 900px;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  > .container {
    position: relative;
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;

const Wrapper = () => {
  const { status: getMusicbillListStatus, musicbillList } = useMusicbillList();
  const playMode = usePlayMode();
  const {
    loading: audioLoading,
    paused: audioPaused,
    duration: audioDuration,
  } = useAudioState();
  const playlist = usePlaylist();
  const { playqueue, currentPosition: currentPlayqueuePosition } = usePlayqueue(
    playlist,
  );
  const searchWord = useSearchWord();
  const currentMusic = playqueue[currentPlayqueuePosition];
  const volume = useVolume();

  return (
    <Context.Provider
      value={{
        getMusicbillListStatus,
        musicbillList,

        audioLoading,
        audioPaused,
        audioDuration,

        playlist,

        playqueue,
        currentPlayqueuePosition,

        playMode,
        searchWord,
        volume,
      }}
    >
      <Scrollable>
        <Style>
          <Sidebar />
          <div className="container">
            <Header />
            <Route />
            <Controller />
          </div>
        </Style>
      </Scrollable>

      <SingerDrawer />
      <MusicDrawer />
      <ListDrawer />
      <MusicbillListDrawer />
      <MusicbillOrderDrawer />

      <MvDialog />
      <NewMusicbillDialog />
      <OriginalMusicDialog />

      <MusicOperatePopup />

      {electron ? <Electron /> : null}
      {currentMusic ? (
        <>
          <Audio volume={volume} playMode={playMode} music={currentMusic} />
          <MediaSession music={currentMusic} />
          <PlayLog music={currentMusic} duration={audioDuration} />
        </>
      ) : null}
    </Context.Provider>
  );
};

export default withSignin()(Wrapper);
