import React from 'react';

import config from '@/config';
import openLink from '@/util/open_link';
import Button, { Type } from '@/component/button';

const style = {
  margin: 20,
  width: 'calc(100% - 40px)',
};
const onFeedback = () => openLink(`${config.githubRepository}/issues`);

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
