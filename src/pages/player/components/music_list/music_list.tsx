import React from 'react';
import styled from 'styled-components';
import List from 'react-list';

import scrollbarAsNeeded from '@/style/scrollbar_as_needed';
import { MusicWithIndex } from '../../constants';
import { containerStyle } from './constant';
import Music from '../music';

const Style = styled.div`
  ${scrollbarAsNeeded}
  overflow: auto;
`;

interface Props {
  style?: React.CSSProperties;
  musicList: MusicWithIndex[];
  [key: string]: any;
}

const MusicList = React.forwardRef<HTMLDivElement, Props>(
  ({ style, musicList, ...props }: Props, ref) => {
    const itemRenderer = (index, key) => {
      const music = musicList[index];
      return <Music key={key} musicWithIndex={music} />;
    };

    return (
      <Style
        ref={ref}
        style={{
          ...containerStyle,
          ...style,
        }}
        {...props}
      >
        <List
          type="uniform"
          length={musicList.length}
          itemRenderer={itemRenderer}
        />
      </Style>
    );
  },
);

export default MusicList;
