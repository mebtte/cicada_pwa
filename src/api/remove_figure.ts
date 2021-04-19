import api from '.';

/**
 * 删除角色
 * @author mebtte<hi@mebtte.com>
 * @param id 角色ID
 */
function removeFigure(id: string) {
  return api.delete<void>('/1/figure', {
    withToken: true,
    params: { id },
  });
}

export default removeFigure;
