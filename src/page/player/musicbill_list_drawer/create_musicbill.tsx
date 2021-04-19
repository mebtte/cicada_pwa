import React, { useCallback, useState } from 'react';

import getRandomCover from '../../../util/get_random_cover';
import { COVER_SIZE, COVER_STYLE, ICON_SIZE, ICON_STYLE } from './constant';
import eventemitter, { Type as EventType } from '../eventemitter';
import Avatar from '../../../component/avatar';
import Icon, { Name } from '../../../component/icon';
import MusicbillContainer from './musicbill_container';

const CreateMusicbill = () => {
  const [cover] = useState(getRandomCover());
  const onCreateMusicbill = useCallback(
    () => eventemitter.emit(EventType.OPEN_CREATE_MUSICBILL_DIALOG, null),
    [],
  );
  return (
    <MusicbillContainer onClick={onCreateMusicbill}>
      <Icon name={Name.PLUS_OUTLINE} size={ICON_SIZE} style={ICON_STYLE} />
      <Avatar src={cover} size={COVER_SIZE} style={COVER_STYLE} />
      <div className="name">创建歌单</div>
    </MusicbillContainer>
  );
};

export default React.memo(CreateMusicbill);
