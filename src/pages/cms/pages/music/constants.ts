import cmsGetFigureList from '@/apis/cms_get_figure_list';

export type Singer = AsyncReturnType<typeof cmsGetFigureList>['list'][0];

export enum Query {
  CREATE_MUSIC_DIALOG_OPEN = 'create_music_dialog_open',
}
