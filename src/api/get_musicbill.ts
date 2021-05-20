/* eslint-disable camelcase */
import api from '.';
import getRandomCover from '../utils/get_random_cover';
import { MusicType } from '../constant/music';

async function getMusicbill(id: string) {
  const musicbill = await api.get<{
    music_list: {
      type: MusicType;
      accompany: boolean | string;
      alias: string;
      cover?: string;
      hq: boolean | string;
      id: string;
      name: string;
      normal: string;
      singers: {
        alias: string;
        avatar?: string;
        id: string;
        name: string;
      }[];
      mv: boolean | string;
    }[];
  }>('/musicbill', {
    params: { id },
    withToken: true,
  });
  const { music_list: musicList } = musicbill;
  return {
    id,
    musicList: musicList.map(
      ({
        type,
        accompany,
        alias,
        cover,
        hq,
        id: musicId,
        name,
        normal,
        singers,
        mv,
      }) => ({
        type,
        accompany,
        alias,
        cover: cover || getRandomCover(),
        hq,
        id: musicId,
        name,
        normal,
        singers: singers.map(
          ({ alias: singerAlias, avatar, id: singerId, name: singerName }) => ({
            alias: singerAlias,
            avatar: avatar || getRandomCover(),
            id: singerId,
            name: singerName,
          }),
        ),
        mv,
      }),
    ),
  };
}

export default getMusicbill;
