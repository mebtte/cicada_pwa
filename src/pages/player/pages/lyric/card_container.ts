import { animated } from 'react-spring';
import styled from 'styled-components';

import { container } from './constant';

export default styled(animated.div)`
  ${container}
  display: flex;
  align-items: center;
`;
