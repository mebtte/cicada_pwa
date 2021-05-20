import api from '.';

/**
 * 记录播放记录
 * @author mebtte<hi@mebtte.com>
 */
function recordPlayLog({ id, percent }: { id: string; percent: number }) {
  return api.post('/music/play_log', {
    withToken: true,
    data: {
      id,
      percent,
    },
  });
}

export default recordPlayLog;
