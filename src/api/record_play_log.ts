import api from '.';

/**
 * 记录播放记录
 * @author mebtte<hi@mebtte.com>
 * @param {Object} data
 *  - {String} id 音乐ID
 *  - {Number} percent 进度
 * @return {Promise<Void>}
 */
function recordPlayLog({ id, percent }) {
  return api.post('/1/music/play_log', {
    withToken: true,
    data: {
      id,
      percent,
    },
  });
}

export default recordPlayLog;
