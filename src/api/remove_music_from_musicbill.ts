import api from '.';

/**
 * 从歌单移除音乐
 * @author mebtte<hi@mebtte.com>
 * @param {Object} params
 *  - {String} musicbillId 歌单ID
 *  - {String} musicId 音乐ID
 * @return {Promise<Void>}
 */
function removeMusicFromMusicbill({ musicbillId, musicId }) {
  return api.delete('/1/musicbill/music', {
    params: {
      musicbill_id: musicbillId,
      music_id: musicId,
    },
    withToken: true,
  });
}

export default removeMusicFromMusicbill;
