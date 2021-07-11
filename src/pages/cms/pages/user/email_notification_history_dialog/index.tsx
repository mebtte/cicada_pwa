import React from 'react';

import Dialog, { Title, Content } from '@/components/dialog';
import useHistory from '@/utils/use_history';
import { Query } from '../constants';

const bodyProps = {
  style: {
    width: 650,
  },
};

const EmailNotificationHistoryDialog = ({ open }: { open: boolean }) => {
  const history = useHistory();
  const onClose = () =>
    history.push({
      query: {
        [Query.EMAIL_NOTIFICATION_HISTORY_DIALOG_OPEN]: '',
      },
    });

  return (
    <Dialog open={open} onClose={onClose} bodyProps={bodyProps}>
      <Title>邮件通知记录</Title>
      <Content>content</Content>
    </Dialog>
  );
};

export default EmailNotificationHistoryDialog;
