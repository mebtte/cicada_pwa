import React from 'react';
import styled from 'styled-components';
import List from 'react-list';

import scrollbar from '@/style/scrollbar';
import { MusicWithIndex } from '@/constants/music';
import { containerStyle } from './constant';
import Music from '../music';

const Style = styled.div`
  ${scrollbar}
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
