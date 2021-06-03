import api from '.';

/**
 * CMS 创建用户
 * @author mebtte<hi@mebtte.com>
 */
function cmsCreateUser({ email, remark }: { email: string; remark: string }) {
  return api.post<void>('/cms/create_user', {
    withToken: true,
    data: { email, remark },
  });
}

export default cmsCreateUser;
