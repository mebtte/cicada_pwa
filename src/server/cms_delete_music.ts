import api from '.';

/**
 * CMS 删除音乐
 * @author mebtte<hi@mebtte.com>
 */
function cmsDeleteMusic(id: string) {
  return api.get<void>('/api/cms/delete_music', {
    params: { id },
    withToken: true,
  });
}

export default cmsDeleteMusic;
