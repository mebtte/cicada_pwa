import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import logger from '@/platform/logger';
import store from '@/store';
import cmsSendEmailNotification from '@/server/cms_send_email_notication';
import cmsCreateEmailNotification from '@/server/cms_create_email_notification';
import toast from '@/platform/toast';
import dialog from '@/platform/dialog';
import useHistory from '@/utils/use_history';
import CheckboxWithLabel from '@/components/checkbox_with_label';
import {
  TITLE_MAX_LENGTH,
  HTML_MAX_LENGTH,
} from '@/constants/email_notification';
import Label from '@/components/label';
import Input from '@/components/input';
import Textarea from '@/components/textarea';
import Button, { Type as ButtonType } from '@/components/button';
import Dialog, { Title, Content, Action } from '@/components/dialog';
import { Query, User } from '../constants';
import Replacement from './replacement';

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .user-range {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .input {
    width: 100%;
  }
  .textarea {
    height: 150px;
    resize: vertical;
  }
`;
const bodyProps = {
  style: { width: 650 },
};

const SendEmailNotificationDialog = ({
  open,
  selectedUserList,
}: {
  open: boolean;
  selectedUserList: User[];
}) => {
  const history = useHistory();
  const onSelectedUserListDialog = () =>
    history.push({ query: { [Query.SELECTED_USER_LIST_DIALOG_OPEN]: '1' } });
  const onClose = () =>
    history.push({
      query: { [Query.SEND_EMAIL_NOTIFICATION_DIALOG_OPEN]: '' },
    });

  const [all, setAll] = useState(true);

  const [title, setTitle] = useState('');
  const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setTitle(event.target.value);

  const [html, setHtml] = useState('');
  const onHtmlChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) =>
    setHtml(event.target.value);

  const inputCheck = (): boolean => {
    if (!title) {
      toast.error('???????????????');
      return false;
    }
    if (!html) {
      toast.error('??????????????? HTML');
      return false;
    }
    return true;
  };
  const onPreview = () => {
    if (!inputCheck()) {
      return;
    }
    return dialog.confirm({
      title: '?????????????????????????????????????????????, ?????????????',
      onConfirm: async () => {
        try {
          const { user } = store.getState();
          await cmsSendEmailNotification({ toUserId: user.id, title, html });
          toast.success('????????????????????????');
          setTimeout(() => {
            setTitle('');
            setHtml('');
          }, 0);
        } catch (error) {
          logger.error(error, {
            description: '????????????????????????',
            report: true,
          });
          dialog.alert({ title: '????????????', content: error.message });
        }
      },
    });
  };
  const onCreate = () => {
    if (!inputCheck()) {
      return;
    }
    if (!all && !selectedUserList.length) {
      return toast.error('?????????????????????');
    }
    return dialog.confirm({
      title: '????????????????????????????',
      onConfirm: async () => {
        try {
          await cmsCreateEmailNotification({
            all,
            toUserIdList: selectedUserList.map((u) => u.id),
            title,
            html,
          });
          toast.success(
            '????????????????????????, ??????????????????, ???????????????????????????????????????',
          );
          onClose();
        } catch (error) {
          logger.error(error, {
            description: '????????????????????????',
            report: true,
          });
          dialog.alert({
            title: '????????????????????????',
            content: error.message,
          });
        }
      },
    });
  };

  useEffect(() => {
    if (selectedUserList.length) {
      setAll(false);
    } else {
      setAll(true);
    }
  }, [selectedUserList]);

  return (
    <Dialog open={open} bodyProps={bodyProps}>
      <Title>??????????????????</Title>
      <StyledContent>
        <Label label="????????????">
          <div className="user-range">
            <CheckboxWithLabel
              label="??????"
              checked={all}
              disabled={!selectedUserList.length}
              onChange={() => setAll(true)}
            />
            <CheckboxWithLabel
              label="??????????????????"
              checked={!all}
              disabled={!selectedUserList.length}
              onChange={() => setAll(false)}
            />
          </div>
        </Label>
        <Label label="??????">
          <Input
            className="input"
            value={title}
            onChange={onTitleChange}
            maxLength={TITLE_MAX_LENGTH}
          />
        </Label>
        <Label label="?????? HTML">
          <Textarea
            className="input textarea"
            value={html}
            onChange={onHtmlChange}
            maxLength={HTML_MAX_LENGTH}
          />
          <Replacement />
        </Label>
      </StyledContent>
      <Action>
        <div className="left">
          <Button label="??????" type={ButtonType.PRIMARY} onClick={onPreview} />
          {all ? null : (
            <Button
              label="?????????????????????"
              type={ButtonType.PRIMARY}
              onClick={onSelectedUserListDialog}
            />
          )}
        </div>
        <Button label="??????" onClick={onClose} />
        <Button label="??????" type={ButtonType.PRIMARY} onClick={onCreate} />
      </Action>
    </Dialog>
  );
};

export default SendEmailNotificationDialog;
