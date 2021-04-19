import api from '.';
import { SearchKey, Figure } from '../constant/figure';

function getFigureList({ key, value }: { key: SearchKey; value: string }) {
  return api.get<Figure[]>('/1/figure/list', {
    params: { key, value },
    withToken: true,
  });
}

export default getFigureList;
