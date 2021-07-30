import api from '.';

export enum Key {
  NAME = 'name',
  DESCRIPTION = 'description',
  COVER = 'cover',
}

/**
 * 更新歌单
 * @author mebtte<hi@mebtte.com>
 */
async function updateUserMusicbill({
  id,
  key,
  value,
}: {
  id: string;
  key: Key;
  value: string | Blob;
}) {
  const form = new FormData();
  form.append('id', id);
  form.append('key', key);
  form.append('value', value);
  return api.post<void>('/api/update_user_musicbill', {
    data: form,
    withToken: true,
  });
}

export default updateUserMusicbill;