import React from 'react';
import styled from 'styled-components';

import IconButton, { Name } from '@/component/icon_button';

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
}) => {
  return (
    <Style>
      <IconButton
        className="action"
        name={Name.REFRESH_OUTLINE}
        size={ACTION_SIZE}
        onClick={reload}
        loading={loading}
      />
    </Style>
  );
};

export default Action;
