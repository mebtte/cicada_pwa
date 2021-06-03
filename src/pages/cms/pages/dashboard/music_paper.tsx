import React from 'react';

import { CMS_PATH } from '@/constants/route';
import useHistory from '@/utils/use_history';
import Tooltip, { Placement } from '@/components/tooltip';
import IconButton, { Name as IconButtonName } from '@/components/icon_button';
import { Name as IconName } from '@/components/icon';
import Paper from './paper';
import { Query } from '../music/constants';

const ACTION_SIZE = 24;

const MusicPaper = ({ total }: { total: number }) => {
  const history = useHistory();
  const onCreateMusic = (event: React.MouseEvent) => {
    event.stopPropagation();
    return history.push({
      pathname: CMS_PATH.MUSIC,
      query: {
        [Query.CREATE_DIALOG_OPEN]: '1',
      },
    });
  };
  return (
    <Paper
      to={CMS_PATH.MUSIC}
      icon={IconName.MUSIC_FILL}
      label="音乐数"
      value={total.toString()}
    >
      <Tooltip title="创建音乐" placement={Placement.BOTTOM}>
        <IconButton
          name={IconButtonName.PLUS_OUTLINE}
          size={ACTION_SIZE}
          onClick={onCreateMusic}
        />
      </Tooltip>
    </Paper>
  );
};

export default MusicPaper;
