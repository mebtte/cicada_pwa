import api from '.';

export enum Key {
  AVATAR = 'avatar',
  NICKNAME = 'nickname',
  CONDITION = 'condition',
}

/**
 * 更新用户资料
 * @author mebtte<hi@mebtte.com>
 */
async function updateProfile({
  key,
  value,
}: {
  key: Key;
  value: string | File;
}) {
  const form = new FormData();
  form.append('key', key);
  form.append('value', value);
  return api.post<void>('/update_profile', {
    withToken: true,
    data: form,
  });
}

export default updateProfile;
