import api from '.';

/**
 * 创建用户歌单
 * @author mebtte <hi@mebtte.com>
 */
function createUserMusicbill(name: string) {
  return api.post<{
    id: string;
    name: string;
    order: number;
    // eslint-disable-next-line camelcase
    create_time: string;
  }>('/api/create_user_musicbill', { withToken: true, data: { name } });
}

export default createUserMusicbill;
