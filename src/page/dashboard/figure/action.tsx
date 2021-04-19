import React, { useCallback } from 'react';
import styled from 'styled-components';

import eventemitter, { Type as EventType } from './eventemitter';
import IconButton, { Name } from '../../../component/icon_button';
import Tooltip, { Placement } from '../../../component/tooltip';

const Style = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  > .action {
    margin-bottom: 10px;
  }
`;

const Action = () => {
  const onOpenCreateDialog = useCallback(
    () => eventemitter.emit(EventType.OPEN_CREATE_DIALOG),
    [],
  );
  return (
    <Style>
      <Tooltip title="创建角色" placement={Placement.TOP}>
        <IconButton
          className="action"
          name={Name.PLUS_OUTLINE}
          onClick={onOpenCreateDialog}
        />
      </Tooltip>
    </Style>
  );
};

export default React.memo(Action);
