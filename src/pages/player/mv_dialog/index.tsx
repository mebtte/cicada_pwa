import React from 'react';
import styled from 'styled-components';

import Dialog from '@/components/dialog';
import useMvPopup from './use_mv_popup';
import MusicInfo from '../component/music_info';

const bodyProps = {
  style: {
    width: '80%',
    maxWidth: 960,
    padding: 20,
  },
};
const Video = styled.video.attrs({
  controls: true,
  controlsList: 'nodownload',
})`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  outline: none;
  object-fit: cover;
`;

const MvDialog = () => {
  const { open, onClose, music } = useMvPopup();

  return (
    <Dialog open={open} onClose={onClose} bodyProps={bodyProps}>
      {music ? (
        <>
          <Video
            src={music.mv as string}
            poster={music.cover}
            preload="auto"
            autoPlay
          />
          <MusicInfo music={music} />
        </>
      ) : null}
    </Dialog>
  );
};

export default MvDialog;
