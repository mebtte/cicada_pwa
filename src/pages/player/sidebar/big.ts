import styled from 'styled-components';

import scrollbarNever from '@/style/scrollbar_never';
import Content from './content';

export default styled(Content)`
  width: 240px;

  background-color: rgb(245, 245, 245);

  overflow: auto;
  ${scrollbarNever};
`;
