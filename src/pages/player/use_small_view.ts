import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

const SMALL_VIEW_MAX_WIDTH = 720;

function isSmallView() {
  return window.innerWidth <= SMALL_VIEW_MAX_WIDTH;
}

export default () => {
  const [smallView, setSmallView] = useState(isSmallView);

  useEffect(() => {
    const onResize = debounce(() => setSmallView(isSmallView()), 300);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return smallView;
};
