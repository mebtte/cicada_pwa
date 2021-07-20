import api from '.';

/**
 * 删除用户歌单
 * @author mebtte<hi@mebtte.com>
 */
function deleteUserMusicbill(id: string) {
  return api.get('/api/delete_user_musicbill', {
    params: { id },
    withToken: true,
  });
}

export default deleteUserMusicbill;
