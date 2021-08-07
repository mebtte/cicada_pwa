import React from 'react';

import GlobalStyle from './app/global_style';

const Styleguide = ({ children }: React.PropsWithChildren<{}>) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default Styleguide;
