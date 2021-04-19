import api from '.';
import { UpdateKey } from '../constant/user';

/**
 * 更新用户资料
 * @author mebtte<hi@mebtte.com>
 */
async function updateUser({
  key,
  value,
}: {
  key: UpdateKey;
  value: string | File;
}) {
  const form = new FormData();
  form.append('key', key);
  form.append('value', value);
  return api.put('/1/user', {
    withToken: true,
    data: form,
  });
}

export default updateUser;
