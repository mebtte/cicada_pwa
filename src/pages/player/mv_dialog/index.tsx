import React from 'react';
import styled from 'styled-components';

import Dialog from '@/components/dialog';
import useMvPopup from './use_mv_popup';
import MusicInfo from '../components/music_info';

const bodyProps = {
  style: {
    margin: '100px auto',
    width: 720,
    height: 'calc(100% - 200px)',
    display: 'flex',
    flexDirection: 'column' as 'column',
    overflow: 'hidden',
  },
};
const musicInfoStyle = {
  padding: 10,
};
const Iframe = styled.iframe`
  flex: 1;
  min-height: 0;
  border: none;
`;

const MvDialog = () => {
  const { open, onClose, music } = useMvPopup();

  if (!music) {
    return null;
  }
  return (
    <Dialog open={open} onClose={onClose} bodyProps={bodyProps}>
      <MusicInfo music={music} style={musicInfoStyle} />
      <Iframe src={music.mvLink} allowFullScreen />
    </Dialog>
  );
};

export default React.memo(MvDialog);
