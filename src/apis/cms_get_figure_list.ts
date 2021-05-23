/* eslint-disable camelcase */
import api from '.';

export enum SearchKey {
  ID = 'id',
  NAME = 'name',
  ALIAS = 'alias',
}

export const SEARCH_KEY_MAP_LABEL: Record<SearchKey, string> = {
  [SearchKey.ID]: 'ID',
  [SearchKey.NAME]: '名字',
  [SearchKey.ALIAS]: '别名',
};

export const SEARCH_KEYS = Object.keys(SEARCH_KEY_MAP_LABEL) as SearchKey[];

async function cmsGetFigureList({
  page,
  pageSize,
  searchKey,
  searchValue,
}: {
  page?: number;
  pageSize?: number;
  searchKey?: SearchKey;
  searchValue?: string;
}) {
  const params =
    searchKey && searchValue
      ? {
          page,
          page_size: pageSize,
          search_key: searchKey,
          search_value: searchValue,
        }
      : { page, page_size: pageSize };
  const data = await api.get<{
    total: number;
    list: {
      id: string;
      avatar: string;
      name: string;
      alias: string;
      create_time: string;
    }[];
  }>('/cms/get_figure_list', {
    params,
    withToken: true,
  });
  return {
    total: data.total,
    list: data.list.map(
      ({
        id: figureId,
        name: fName,
        alias: fAlias,
        avatar,
        create_time: createTime,
      }) => ({
        id: figureId,
        name: fName,
        alias: fAlias,
        avatar,
        createTime: new Date(createTime),
      }),
    ),
  };
}

export default cmsGetFigureList;
