import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react';
import styled from 'styled-components';

import { LocalMusicbill } from '@/constant/musicbill';
import { RequestStatus } from '@/constant';
import { MUSICBILL_SCROLL_TOP } from '@/constant/storage_key';
import filterMusicList from '@/utils/filter_music_list';
import { TopContent, TOP_CONTENT_HEIGHT } from './constant';
import useTopContent from './use_top_content';
import useKeyword from './use_keyword';
import eventemitter, { Type as EventType } from '../eventemitter';
import { routeContainerStyle } from '../style';
import Info from './info';
import MusicList from '../component/music_list';
import Action from './action';
import TextEditDialog from './text_edit_dialog';
import CoverEditDialog from './cover_edit_dialog';
import Search from './search';

const Style = styled.div`
  ${routeContainerStyle}
  display: flex;
  flex-direction: column;
  > .top-content {
    position: relative;
    height: ${TOP_CONTENT_HEIGHT}px;
  }
  > .content {
    flex: 1;
    min-width: 0;
    display: flex;
  }
`;
const musicListStyle = {
  flex: 1,
  minWidth: 0,
  marginLeft: 20,
};
const innerMusicListStyle = {
  paddingBottom: 20,
};

const Musicbill = ({ musicbill }: { musicbill: LocalMusicbill }) => {
  const musicListRef = useRef<HTMLDivElement>();

  const { status, id, musicList, cover } = musicbill;
  const topContent = useTopContent();
  const keyword = useKeyword(topContent);
  const reload = useCallback(
    () => eventemitter.emit(EventType.FETCH_MUSICBILL, musicbill),
    [musicbill],
  );

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const openEditDialog = useCallback(() => setEditDialogOpen(true), []);
  const closeEditDialog = useCallback(() => setEditDialogOpen(false), []);

  const [editCoverDialogOpen, setEditCoverDialogOpen] = useState(false);
  const openEditCoverDialog = useCallback(
    () => setEditCoverDialogOpen(true),
    [],
  );
  const closeEditCoverDialog = useCallback(
    () => setEditCoverDialogOpen(false),
    [],
  );

  useEffect(() => {
    if (musicbill.status === RequestStatus.NOT_START) {
      eventemitter.emit(EventType.FETCH_MUSICBILL, musicbill);
    }
  }, [musicbill]);

  const scrollTimer = useRef<ReturnType<typeof setTimeout>>();
  const onMusicListScroll = useCallback(
    (event) => {
      clearTimeout(scrollTimer.current);
      const { scrollTop } = event.target as HTMLDivElement;
      scrollTimer.current = setTimeout(
        () =>
          sessionStorage.setItem(
            MUSICBILL_SCROLL_TOP.replace('{{musicbill_id}}', id),
            `${scrollTop}`,
          ),
        2000,
      );
    },
    [id],
  );
  useLayoutEffect(() => {
    if (status === RequestStatus.SUCCESS) {
      setTimeout(() => {
        musicListRef.current.scrollTop = +sessionStorage.getItem(
          MUSICBILL_SCROLL_TOP.replace('{{musicbill_id}}', musicbill.id),
        );
      }, 0);
    }
  }, [musicbill.id, status]);

  const filteredMusicList = filterMusicList(musicList, keyword);
  return (
    <Style>
      <div className="top-content">
        <Info visible={topContent === TopContent.INFO} musicbill={musicbill} />
        <Search visible={topContent === TopContent.SEARCH} cover={cover} />
      </div>
      <div className="content">
        <MusicList
          ref={musicListRef}
          style={musicListStyle}
          status={status}
          musicList={filteredMusicList}
          reload={reload}
          emptyDescription={
            keyword ? `没有找到"${keyword}"相关的音乐` : '歌单没有音乐'
          }
          musicListProps={{
            onScroll: onMusicListScroll,
            style: innerMusicListStyle,
          }}
        />
        <Action
          musicbill={musicbill}
          reload={reload}
          onEdit={openEditDialog}
          onEditCover={openEditCoverDialog}
        />
      </div>
      <TextEditDialog
        open={editDialogOpen}
        onClose={closeEditDialog}
        musicbill={musicbill}
      />
      <CoverEditDialog
        open={editCoverDialogOpen}
        onClose={closeEditCoverDialog}
        musicbill={musicbill}
      />
    </Style>
  );
};

export default Musicbill;
