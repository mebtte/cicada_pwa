import api from '.';

/**
 * 从歌单移除音乐
 * @author mebtte<hi@mebtte.com>
 */
function removeMusicFromMusicbill({
  musicbillId,
  musicId,
}: {
  musicbillId: string;
  musicId: string;
}) {
  return api.delete('/musicbill/music', {
    params: {
      musicbill_id: musicbillId,
      music_id: musicId,
    },
    withToken: true,
  });
}

export default removeMusicFromMusicbill;
