import React from 'react';

import { CMS_PATH } from '@/constants/route';
import useHistory from '@/utils/use_history';
import Tooltip, { Placement } from '@/components/tooltip';
import IconButton, { Name as IconButtonName } from '@/components/icon_button';
import { Name as IconName } from '@/components/icon';
import Paper from './paper';
import { Query } from '../figure/constants';

const ACTION_SIZE = 24;

const FigurePaper = ({ total }: { total: number }) => {
  const history = useHistory();
  const onCreateFigure = (event: React.MouseEvent) => {
    event.stopPropagation();
    return history.push({
      pathname: CMS_PATH.FIGURE,
      query: {
        [Query.CREATE_DIALOG_OPEN]: '1',
      },
    });
  };
  return (
    <Paper
      to={CMS_PATH.FIGURE}
      icon={IconName.FIGURE_OUTLINE}
      label="角色数"
      value={total.toString()}
    >
      <Tooltip title="创建角色" placement={Placement.BOTTOM}>
        <IconButton
          name={IconButtonName.PLUS_OUTLINE}
          size={ACTION_SIZE}
          onClick={onCreateFigure}
        />
      </Tooltip>
    </Paper>
  );
};

export default FigurePaper;
