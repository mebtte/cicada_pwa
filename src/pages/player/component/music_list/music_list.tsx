import React, { useCallback } from 'react';
import styled from 'styled-components';
import List from 'react-list';

import { ORIGINAL_SCROLLBAR_WIDTH } from '@/constants';
import scrollbar from '@/style/scrollbar';
import { MusicWithIndex } from '@/constants/music';
import { containerStyle } from './constant';
import Music from '../music';

const musicStyle = {
  marginRight: ORIGINAL_SCROLLBAR_WIDTH > 0 ? 0 : 10,
};
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
    const itemRenderer = useCallback(
      (index, key) => {
        const music = musicList[index];
        return <Music key={key} music={music} style={musicStyle} />;
      },
      [musicList],
    );

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
