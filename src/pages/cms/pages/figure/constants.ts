import cmsGetFigureList from '@/api/cms_get_figure_list';

export type Figure = AsyncReturnType<typeof cmsGetFigureList>['list'][0];

export enum Query {
  SEARCH_NAME = 'search_name',
  SEARCH_ALIAS = 'search_alias',
  PAGE = 'page',

  CREATE_FIGURE_DIALOG_OPEN = 'create_figure_dialog_open',
}
