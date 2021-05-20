import React, { useCallback } from 'react';

import {
  LocalMusicbill,
  UpdateKey,
  COVER_MAX_SIZE,
} from '@/constants/musicbill';
import updateMusicbill from '@/apis/update_musicbill';
import ImageCutterDialog from '@/components/image_cutter_dialog';
import eventemitter, { Type as EventType } from '../eventemitter';

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
  musicbill: LocalMusicbill;
}) => {
  const onUpdate = useCallback(
    async (image: File) => {
      const newMusicbill = await updateMusicbill({
        id: musicbill.id,
        key: UpdateKey.COVER,
        value: image,
      });
      eventemitter.emit(EventType.UPDATE_MUSICBILL, {
        id: musicbill.id,
        change: { cover: newMusicbill.cover },
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
