/* eslint-disable camelcase */
import api from '.';

async function cmsGetFigureList({
  page = 1,
  pageSize = 30,
  id,
  name,
  alias,
}: {
  page?: number;
  pageSize?: number;
  id?: string;
  name?: string;
  alias?: string;
}) {
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
    params: { page, page_size: pageSize, id, name, alias },
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
