import React, { useMemo } from 'react';
import styled from 'styled-components';

import config from '@/config';
import getRandomInteger from '@/utils/get_random_integer';
import AnimateCover from '../animate_cover';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .placeholder {
    margin-bottom: 15px;
  }
  > .description {
    font-size: 12px;
    color: rgb(155 155 155);
  }
`;

/**
 * 空数据
 * @author mebtte<hi@mebtte.com>
 */
const Empty = ({
  /** 描述 */
  description = '暂时没有数据',
  ...props
}: {
  description?: string;
  [key: string]: any;
}) => {
  const emptyImage = useMemo(
    () =>
      config.emptyImageList[getRandomInteger(0, config.emptyImageList.length)],
    [],
  );
  return (
    <Style {...props}>
      <AnimateCover
        className="placeholder"
        src={emptyImage}
        size={180}
        alt="placeholder"
      />
      <div className="description">{description}</div>
    </Style>
  );
};

export default React.memo(Empty);
