import api from '.';
import { MusicType } from '../constants/music';

/**
 * CMS 创建音乐
 * @author mebtte<hi@mebtte.com>
 */
function cmsCreateMusic({
  singerIdList,
  name,
  type,
  file,
}: {
  singerIdList: string[];
  name: string;
  type: MusicType;
  file: File;
}) {
  const form = new FormData();
  form.append('singer_ids', singerIdList.join(','));
  form.append('name', name);
  form.append('type', type.toString());
  form.append('file', file);
  return api.post('/cms/create_music', {
    data: form,
    withToken: true,
    timeout: 1000 * 60 * 3,
  });
}

export default cmsCreateMusic;
