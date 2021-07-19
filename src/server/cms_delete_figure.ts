import api from '.';

/**
 * CMS 删除角色
 * @author mebtte<hi@mebtte.com>
 */
function deleteFigure(id: string) {
  return api.get<void>('/api/cms/delete_figure', {
    params: { id },
    withToken: true,
  });
}

export default deleteFigure;
