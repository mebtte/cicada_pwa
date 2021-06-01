import api from '.';

export enum Key {
  COVER = 'cover',
  NAME = 'name',
  TYPE = 'type',
  ALIAS = 'alias',
  LRC = 'lrc',
  SINGER = 'singer',
  SQ = 'sq',
  HQ = 'hq',
  AC = 'ac',
}

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
  key: Key;
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
