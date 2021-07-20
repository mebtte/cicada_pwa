import api from '.';

/**
 * 添加音乐到歌单
 * @author mebtte<hi@mebtte.com>
 */
function addMusicToUserMusicbill({
  userMusicbillId,
  musicId,
}: {
  userMusicbillId: string;
  musicId: string;
}) {
  return api.post<void>('/api/add_music_to_user_musicbill', {
    data: {
      user_musicbill_id: userMusicbillId,
      music_id: musicId,
    },
    withToken: true,
  });
}

export default addMusicToUserMusicbill;
