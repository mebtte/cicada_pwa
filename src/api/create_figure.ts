import api from '.';

/**
 * 创建角色
 * @author mebtte <hi@mebtte.com>
 */
function createFigure(name: string) {
  return api.post<string>('/1/figure', {
    data: {
      name,
    },
    withToken: true,
  });
}

export default createFigure;
