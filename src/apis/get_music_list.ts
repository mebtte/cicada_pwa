/* eslint-disable camelcase */
import api from '.';
import getRandomCover from '../utils/get_random_cover';
import { MusicType, SearchMusicKey } from '../constants/music';

/**
 * 获取音乐列表
 * @author mebtte <hi@mebtte.com>
 */
async function getMusicList({
  key,
  value,
}: {
  key: SearchMusicKey;
  value: string;
}) {
  const musicList = await api.get<
    {
      type: MusicType;
      ac: string;
      alias: string;
      cover?: string;
      hq: string;
      id: string;
      name: string;
      sq: string;
      singers: { alias: string; avatar?: string; id: string; name: string }[];
      mv: string;
    }[]
  >('/music/list', {
    params: { key, value },
    withToken: true,
  });
  return musicList.map(
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
  );
}

export default getMusicList;
