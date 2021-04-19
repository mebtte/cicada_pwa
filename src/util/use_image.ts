import { useState, useEffect } from 'react';

import loadImage from './load_image';
import logger from '../platform/logger';

export default (src: string, defaultImage: string) => {
  const [currentSrc, setCurrentSrc] = useState(defaultImage);

  useEffect(() => {
    if (src) {
      let canceled = false;
      loadImage(src)
        .then(() => {
          if (canceled) {
            return;
          }
          return setCurrentSrc(src);
        })
        .catch((error) => {
          logger.error(error, {
            report: true,
          });
          if (canceled) {
            return;
          }
          return setCurrentSrc(defaultImage);
        });
      return () => {
        canceled = true;
      };
    }
  }, [src, defaultImage]);

  return currentSrc;
};
