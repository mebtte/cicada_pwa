import React from 'react';

import { GITHUB_REPOSITORY } from '@/constant';
import dialog from '@/platform/dialog';
import openLink from '@/util/open_link';
import Button, { Type } from '@/component/button';

const style = {
  margin: 20,
  width: 'calc(100% - 40px)',
};
const onFeedback = () =>
  dialog.confirm({
    title: '即将打开新的页面, 是否继续?',
    onConfirm: () => openLink(`${GITHUB_REPOSITORY}/issues`),
  });

const Feedback = () => (
  <Button
    block
    label="反馈或建议"
    type={Type.PRIMARY}
    onClick={onFeedback}
    size={32}
    style={style}
  />
);

export default Feedback;
