import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { User, AVATAR_MAX_SIZE, UpdateKey } from '@/constant/user';
import updateUser from '@/apis/update_user';
import store from '@/store';
import { reloadUser } from '@/store/user';
import Avatar, { Shape } from '@/components/avatar';
import IconButton, { Name } from '@/components/icon_button';
import ImageCutterDialog from '@/components/image_cutter_dialog';

const AVATAR_SIZE = 100;
const StyledAvatar = styled(Avatar)`
  margin-left: 40px;
`;
const IMAGE_SIZE = {
  width: AVATAR_MAX_SIZE,
  height: AVATAR_MAX_SIZE,
};
const Style = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Wrapper = ({ user }: { user: User }) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const openEditDialog = useCallback(() => setEditDialogOpen(true), []);
  const closeEditDialog = useCallback(() => setEditDialogOpen(false), []);
  const onUpdate = useCallback(async (image: File) => {
    await updateUser({ key: UpdateKey.AVATAR, value: image });
    // @ts-ignore
    await store.dispatch(reloadUser());
  }, []);

  return (
    <>
      <Style>
        <IconButton name={Name.EDIT_OUTLINE} onClick={openEditDialog} />
        <StyledAvatar src={user.avatar} size={AVATAR_SIZE} />
        <StyledAvatar
          src={user.avatar}
          shape={Shape.CIRCLE}
          size={AVATAR_SIZE}
        />
      </Style>
      <ImageCutterDialog
        open={editDialogOpen}
        onClose={closeEditDialog}
        title="选取头像"
        imageSize={IMAGE_SIZE}
        onUpdate={onUpdate}
      />
    </>
  );
};

export default Wrapper;
