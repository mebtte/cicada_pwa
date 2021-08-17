import React from 'react';
import styled from 'styled-components';

import IconButton, { Name } from '@/components/icon_button';

const Style = styled.div`
  display: flex;
  align-items: center;

  padding: 0 40px;

  > .label {
    flex: 1;
    min-width: 0;

    font-size: 16px;
    font-weight: bold;
    color: var(--text-color-primary);
  }
`;

const Label = ({
  loading,
  onReload,
  children,
}: React.PropsWithChildren<{
  loading: boolean;
  onReload: () => void;
}>) => (
  <Style>
    <div className="label">{children}</div>
    <IconButton
      name={Name.REFRESH_OUTLINE}
      size={16}
      loading={loading}
      onClick={onReload}
    />
  </Style>
);

export default Label;
