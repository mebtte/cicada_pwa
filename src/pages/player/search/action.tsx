import React from 'react';
import styled from 'styled-components';

import toast from '@/platform/toast';
import Tooltip, { Placement } from '@/components/tooltip';
import IconButton, { Name } from '@/components/icon_button';

const ACTION_SIZE = 28;
const Style = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  > .action {
    margin: 5px 0;
  }
`;

const Action = ({
  reload,
  loading,
}: {
  reload: () => void;
  loading: boolean;
}) => (
  <Style>
    <Tooltip title="重新加载" placement={Placement.LEFT}>
      <IconButton
        className="action"
        name={Name.REFRESH_OUTLINE}
        size={ACTION_SIZE}
        onClick={reload}
        loading={loading}
      />
    </Tooltip>
    <Tooltip title="通过歌词搜索" placement={Placement.LEFT}>
      <IconButton
        className="action"
        name={Name.LYRIC_OUTLINE}
        size={ACTION_SIZE}
        onClick={() => toast.info('即将开放')}
      />
    </Tooltip>
  </Style>
);

export default Action;
