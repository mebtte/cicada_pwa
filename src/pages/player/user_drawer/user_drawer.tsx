import React from 'react';

import Empty from '@/components/empty';
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
      <Empty description="Coming soon" style={{ padding: '50px 0' }} />
    </Drawer>
  );
};

export default UserDrawer;
