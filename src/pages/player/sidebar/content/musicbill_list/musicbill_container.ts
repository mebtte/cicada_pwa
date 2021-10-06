import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 20px;

  text-decoration: none;

  > .label {
    flex: 1;
    min-width: 0;

    font-size: 14px;
  }
`;
