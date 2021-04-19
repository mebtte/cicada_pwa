import styled from 'styled-components';

import ellipsis from '@/style/ellipsis';

export default styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
  > .name {
    flex: 1;
    font-size: 14px;
    margin-left: 10px;
    color: rgb(55 55 55);
    ${ellipsis}
  }
`;
