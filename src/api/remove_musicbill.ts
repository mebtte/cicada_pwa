import api from '.';

/**
 * 移除歌单
 * @author mebtte<hi@mebtte.com>
 * @param {String} id 歌单ID
 * @return {Promise<Void>}
 */
function removeMusicbill(id) {
  return api.delete('/1/musicbill', { params: { id }, withToken: true });
}

export default removeMusicbill;
