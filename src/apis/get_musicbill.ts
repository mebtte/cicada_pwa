/* eslint-disable camelcase */
import api from '.';
import getRandomCover from '../utils/get_random_cover';
import { MusicType } from '../constants/music';

async function getMusicbill(id: string) {
  const musicbill = await api.get<{
    music_list: {
      type: MusicType;
      ac: string;
      alias: string;
      cover?: string;
      hq: string;
      id: string;
      name: string;
      sq: string;
      singers: {
        alias: string;
        avatar?: string;
        id: string;
        name: string;
      }[];
      mv: string;
    }[];
  }>('/musicbill', {
    params: { id },
    withToken: true,
  });
  const { music_list: musicList } = musicbill;
  return {
    id,
    musicList: musicList.map(
      ({ type, ac, alias, cover, hq, id: musicId, name, sq, singers, mv }) => ({
        type,
        ac,
        alias,
        cover: cover || getRandomCover(),
        hq,
        id: musicId,
        name,
        sq,
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
