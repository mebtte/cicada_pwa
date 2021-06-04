import { ApiMusic } from '@/constants/music';
import transformApiMusic from '@/utils/transform_api_music';
import api from '.';

export const KEYWORD_MAX_LENGTH = 50;

async function searchMusicByLrc({
  keyword,
  page = 1,
  pageSize = 30,
}: {
  keyword: string;
  page?: number;
  pageSize?: number;
}) {
  const data = await api.get<{
    total: number;
    list: (ApiMusic & {
      lrc: string;
    })[];
  }>('/search_music_by_lrc', {
    withToken: true,
    params: {
      keyword,
      page,
      page_size: pageSize,
    },
  });
  return {
    total: data.total,
    list: data.list.map((m) => ({
      ...transformApiMusic(m),
      lrc: m.lrc,
    })),
  };
}

export default searchMusicByLrc;
