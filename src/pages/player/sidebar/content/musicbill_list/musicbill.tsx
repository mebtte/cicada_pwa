import React from 'react';
import styled from 'styled-components';

import Avatar from '@/components/avatar';

const Style = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 15px 0;
`;

const Musicbill = ({ cover }: { cover: string }) => {
  return (
    <Style>
      <Avatar src={cover} size={24} />
    </Style>
  );
};

export default Musicbill;
