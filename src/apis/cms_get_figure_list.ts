/* eslint-disable camelcase */
import api from '.';

async function cmsGetFigureList({
  name,
  alias,
  page = 1,
  pageSize = 30,
}: {
  name?: string;
  alias?: string;
  page?: number;
  pageSize?: number;
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
    params: { name, alias, page, page_size: pageSize },
    withToken: true,
  });
  return {
    total: data.total,
    list: data.list.map((f) => ({
      ...f,
      createTime: new Date(f.create_time),
    })),
  };
}

export default cmsGetFigureList;
