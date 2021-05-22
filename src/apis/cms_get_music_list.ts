/* eslint-disable camelcase */
import { MusicType } from '@/constants/music';
import api from '.';

async function cmsGetMusicList({
  page,
  pageSize,
  id,
  name,
  alias,
  singerId,
  singerName,
}: {
  page: number;
  pageSize: number;
  id?: string;
  name?: string;
  alias?: string;
  singerId?: string;
  singerName?: string;
}) {
  const data = await api.get<{
    total: number;
    list: {
      id: string;
      cover: string;
      name: string;
      alias: string;
      type: MusicType;
      singers: {
        id: string;
        avatar: string;
        name: string;
        alias: string;
      }[];
      create_time: string;
    }[];
  }>('/cms/get_music_list', {
    params: {
      page,
      page_size: pageSize,
      id,
      name,
      alias,
      singer_id: singerId,
      singer_name: singerName,
    },
    withToken: true,
  });
  return {
    total: data.total,
    list: data.list.map(
      ({
        id: musicId,
        cover,
        name: musicName,
        alias: musicAlias,
        type,
        singers,
        create_time: createTime,
      }) => ({
        id: musicId,
        cover,
        name: musicName,
        alias: musicAlias,
        type,
        singers,
        createTime: new Date(createTime),
      }),
    ),
  };
}

export default cmsGetMusicList;
