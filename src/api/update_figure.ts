import api from '.';
import { UpdateKey, Figure } from '../constant/figure';

/**
 * 更新角色
 * @author mebtte<hi@mebtte.com>
 */
function updateFigure({
  id,
  key,
  value,
}: {
  id: string;
  key: UpdateKey;
  value: string | Blob;
}) {
  const form = new FormData();
  form.append('id', id);
  form.append('key', key);
  form.append('value', value);
  return api.put<Figure>('/1/figure', {
    withToken: true,
    data: form,
  });
}

export default updateFigure;
