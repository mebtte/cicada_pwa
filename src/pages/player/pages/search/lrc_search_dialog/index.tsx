import React, { RefObject } from 'react';
import styled from 'styled-components';

import keyboardHandlerWrapper from '@/utils/keyboard_handler_wrapper';
import { RequestStatus, IS_MAC_OS, IS_WINDOWS } from '@/constants';
import toast from '@/platform/toast';
import logger from '@/platform/logger';
import searchMusicByLrc from '@/apis/search_music_by_lrc';
import Input from '@/components/input';
import Dialog from '@/components/dialog';
import IconButton, { Name } from '@/components/icon_button';
import eventemitter, { EventType } from '../eventemitter';
import { PAGE_SIZE, MusicList as MusicListType } from './constants';
import MusicList from './music_list';
import { transformMusic } from '../../../utils';

const bodyProps = {
  style: {
    width: 650,
    margin: '50px auto',
    height: 'calc(100% - 100px)',
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: 20,
    padding: 20,
    boxSizing: 'border-box' as 'border-box',
  },
};
const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  > .input {
    flex: 1;
  }
`;

interface Props {
  keyword: string;
}
interface State {
  keyword: string;
  open: boolean;

  page: number;
  musicList: MusicListType;
}

class LrcSearchDialog extends React.Component<Props, State> {
  inputRef: RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.state = {
      keyword: '',
      open: false,

      page: 1,
      musicList: { status: RequestStatus.LOADING, keyword: '' },
    };
    this.inputRef = React.createRef<HTMLInputElement>();
  }

  componentDidMount() {
    eventemitter.on(EventType.OPEN_LRC_SEARCH_DIALOG, this.onOpen);
    // @ts-expect-error
    document.addEventListener('keydown', this.onKeyboard);
  }

  shouldComponentUpdate(_, nextState: State) {
    if (!this.state.open && !nextState.open) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    eventemitter.off(EventType.OPEN_LRC_SEARCH_DIALOG, this.onOpen);
    // @ts-expect-error
    document.removeEventListener('keydown', this.onKeyboard);
  }

  onOpen = () =>
    this.setState(
      {
        open: true,
        keyword: this.props.keyword,
      },
      () => {
        this.onSearch();
        this.inputRef.current.focus();
      },
    );

  onClose = () => this.setState({ open: false });

  onKeyboard = keyboardHandlerWrapper((event: React.KeyboardEvent) => {
    if (!this.state.open) {
      return;
    }
    if (
      event.key !== 'f' ||
      (IS_MAC_OS && !event.metaKey) ||
      (IS_WINDOWS && !event.ctrlKey)
    ) {
      return;
    }
    event.preventDefault();
    return this.inputRef.current.focus();
  });

  onKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ keyword: event.target.value });

  onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  };

  onPageChange = (page: number) =>
    this.setState({ page }, this.searchMusicList);

  onSearch = async () =>
    this.setState(
      {
        page: 1,
      },
      this.searchMusicList,
    );

  searchMusicList = async () => {
    const { keyword, page } = this.state;
    if (!keyword) {
      return toast.error('请输入关键词');
    }
    this.setState({
      musicList: { status: RequestStatus.LOADING, keyword },
    });
    try {
      const data = await searchMusicByLrc({
        keyword,
        page,
        pageSize: PAGE_SIZE,
      });
      this.setState({
        musicList: {
          keyword,
          status: RequestStatus.SUCCESS,
          total: data.total,
          list: data.list.map((m, i) => ({
            index: data.list.length - i,
            music: {
              ...transformMusic(m),
              lrc: m.lrc,
            },
          })),
        },
      });
    } catch (error) {
      logger.error(error, {
        description: '通过歌词搜索音乐失败',
        report: true,
      });
      this.setState({
        musicList: { keyword, status: RequestStatus.ERROR, error },
      });
    }
  };

  render() {
    const { open, keyword, page, musicList } = this.state;
    return (
      <Dialog open={open} onClose={this.onClose} bodyProps={bodyProps}>
        <InputBox>
          <Input
            className="input"
            value={keyword}
            onChange={this.onKeywordChange}
            onKeyDown={this.onKeyDown}
            placeholder="歌词搜索"
            ref={this.inputRef}
          />
          <IconButton name={Name.SEARCH_OUTLINE} onClick={this.onSearch} />
        </InputBox>
        <MusicList
          page={page}
          musicList={musicList}
          retry={this.searchMusicList}
          onPageChange={this.onPageChange}
        />
      </Dialog>
    );
  }
}

export default React.memo(LrcSearchDialog);
