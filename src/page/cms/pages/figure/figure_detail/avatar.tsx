import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import eventemitter, { Type as EventType } from '../eventemitter';
import toast from '../../../../../platform/toast';
import updateFigure from '../../../../../api/update_figure';
import {
  AVATAR_MAX_SIZE,
  UpdateKey,
  Figure,
} from '../../../../../constant/figure';
import Avatar, { Shape } from '../../../../../component/avatar';
import Button, { Type } from '../../../../../component/button';
import ImageCutterDialog from '../../../../../component/image_cutter_dialog';

const AVATAR_SIZE = 100;
const IMAGE_SIZE = {
  width: AVATAR_MAX_SIZE,
  height: AVATAR_MAX_SIZE,
};
const Style = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  > .avatar {
    margin-right: 30px;
  }
`;

const Wrapper = ({ figure }: { figure: Figure }) => {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  const onUpdate = useCallback(
    async (image: File) => {
      const newFigure = await updateFigure({
        id: figure.id,
        key: UpdateKey.AVATAR,
        value: image,
      });
      eventemitter.emit(EventType.FIGURE_UPDATED, {
        id: figure.id,
        key: 'avatar',
        value: newFigure.avatar,
      });
      toast.success('已更新头像');
      onClose();
    },
    [figure, onClose],
  );

  return (
    <Style>
      <Avatar
        className="avatar"
        animated
        src={figure.avatar}
        size={AVATAR_SIZE}
      />
      <Avatar
        className="avatar"
        animated
        src={figure.avatar}
        shape={Shape.CIRCLE}
        size={AVATAR_SIZE}
      />
      <Button label="更换头像" type={Type.PRIMARY} size={32} onClick={onOpen} />
      <ImageCutterDialog
        open={open}
        onClose={onClose}
        title="更换头像"
        onUpdate={onUpdate}
        imageSize={IMAGE_SIZE}
      />
    </Style>
  );
};

export default React.memo(Wrapper);
