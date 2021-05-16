/* eslint-disable camelcase */
import api from '.';
import getRandomCover from '../util/get_random_cover';
import { MusicType, SearchMusicKey } from '../constant/music';

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
      accompany: boolean | string;
      alias: string;
      cover?: string;
      hq: boolean | string;
      id: string;
      name: string;
      normal: string;
      singers: { alias: string; avatar?: string; id: string; name: string }[];
      mv: boolean | string;
    }[]
  >('/music/list', {
    params: { key, value },
    withToken: true,
  });
  return musicList.map(
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
  );
}

export default getMusicList;
