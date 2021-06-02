/* eslint-disable camelcase */
import api from '.';

/**
 * CMS 获取用户列表
 * @author mebtte<hi@mebtte.com>
 */
async function cmsGetUserList() {
  const userList = await api.get<
    {
      id: string;
      email: string;
      nickname: string;
      remark: string;
      disabled: 0 | 1;
      condition: string;
      avatar: string;
      join_time: string;
      cms: 0 | 1;
    }[]
  >('/cms/get_user_list', {
    withToken: true,
  });
  return userList.map(
    ({
      id,
      email,
      nickname,
      remark,
      disabled,
      condition,
      avatar,
      join_time: joinTime,
      cms,
    }) => ({
      id,
      email,
      nickname,
      remark,
      disabled,
      condition,
      avatar,
      joinTime: new Date(joinTime),
      cms,
    }),
  );
}

export default cmsGetUserList;
