/* eslint-disable camelcase */
import api from '.';

/**
 * cms 创建角色
 * @author mebtte<hi@mebtte.com>
 */
function cmsCreateFigure(name: string) {
  return api.post<{
    id: string;
    avatar: string;
    name: string;
    alias: string;
    create_time: string;
  }>('/cms/create_figure', { data: { name }, withToken: true });
}

export default cmsCreateFigure;
