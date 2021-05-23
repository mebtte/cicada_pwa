import api from '.';

/**
 * CMS 更新音乐
 * @author mebtte<hi@mebtte.com>
 */
function cmsUpdateMusic({
  id,
  key,
  value,
}: {
  id: string;
  key: 'cover' | 'name' | 'type' | 'alias' | 'lrc';
  value: string | File;
}) {
  const form = new FormData();
  form.append('id', id);
  form.append('key', key);
  form.append('value', value);
  return api.post('/cms/update_music', {
    data: form,
    withToken: true,
  });
}

export default cmsUpdateMusic;
