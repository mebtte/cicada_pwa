import styled from 'styled-components';

import scrollbarAsNeeded from '@/style/scrollbar_as_needed';

export default styled.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  ${scrollbarAsNeeded}

  padding: 0 20px;

  font-size: 14px;
  color: var(--text-color-secondary);
  line-height: 1.5;
`;
