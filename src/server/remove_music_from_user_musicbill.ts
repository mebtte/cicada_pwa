import server from '.';

/**
 * 从歌单移除音乐
 * @author mebtte<hi@mebtte.com>
 */
function removeMusicFromUserMusicbill({
  userMusicbillId,
  musicId,
}: {
  userMusicbillId: string;
  musicId: string;
}) {
  return server.get('/api/remove_music_from_user_musicbill', {
    params: {
      user_musicbill_id: userMusicbillId,
      music_id: musicId,
    },
    withToken: true,
  });
}

export default removeMusicFromUserMusicbill;
