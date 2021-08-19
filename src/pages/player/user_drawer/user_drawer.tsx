import React from 'react';

import Drawer from '@/components/drawer';

const bodyProps = {
  style: { width: 400 },
};

const UserDrawer = ({
  open,
  onClose,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
}: {
  open: boolean;
  onClose: () => void;
  id: string;
}) => {
  return (
    <Drawer open={open} onClose={onClose} bodyProps={bodyProps}>
      即将开放
    </Drawer>
  );
};

export default UserDrawer;
