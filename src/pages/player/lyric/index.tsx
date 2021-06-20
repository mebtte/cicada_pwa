import React from 'react';

import { Music } from '../constants';
import Lyric from './lyric';

const Wrapper = ({ music }: { music: Music | null }) => {
  if (!music) {
    return null;
  }
  return <Lyric music={music} />;
};

export default React.memo(Wrapper);
