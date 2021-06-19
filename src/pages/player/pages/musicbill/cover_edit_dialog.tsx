import React, { useCallback } from 'react';

import { COVER_MAX_SIZE } from '@/constants/musicbill';
import updateUserMusicbill, { Key } from '@/apis/update_user_musicbill';
import ImageCutterDialog from '@/components/image_cutter_dialog';
import eventemitter, { EventType } from '../../eventemitter';
import { Musicbill } from '../../constants';

const COVER_SIZE = {
  width: COVER_MAX_SIZE,
  height: COVER_MAX_SIZE,
};

const CoverEditDialog = ({
  open,
  onClose,
  musicbill,
}: {
  open: boolean;
  onClose: () => void;
  musicbill: Musicbill;
}) => {
  const onUpdate = useCallback(
    async (image: File) => {
      await updateUserMusicbill({
        id: musicbill.id,
        key: Key.COVER,
        value: image,
      });
      eventemitter.emit(EventType.USER_MUSICBILL_UPDATED, {
        id: musicbill.id,
      });
    },
    [musicbill],
  );
  return (
    <ImageCutterDialog
      open={open}
      onClose={onClose}
      title="选取封面"
      onUpdate={onUpdate}
      imageSize={COVER_SIZE}
    />
  );
};

export default CoverEditDialog;
