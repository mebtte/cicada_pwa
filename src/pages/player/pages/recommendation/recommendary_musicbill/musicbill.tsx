import React from 'react';

import { Musicbill as MusicbillType } from './constants';
import Cover from '../cover';
import MusicbillStyle from './musicbill_style';
import eventemitter, { EventType } from '../../../eventemitter';

const Musicbill = ({ musicbill }: { musicbill: MusicbillType }) => {
  const { id, name, cover } = musicbill;
  const onView = () =>
    eventemitter.emit(EventType.OPEN_MUSICBILL_DRAWER, { id });
  return (
    <MusicbillStyle>
      <Cover src={cover} onClick={onView} />
      <div className="name" onClick={onView}>
        {name}
      </div>
    </MusicbillStyle>
  );
};

export default Musicbill;
