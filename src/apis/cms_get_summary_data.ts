/* eslint-disable camelcase */
import api from '.';

/**
 * CMS 获取概要数据
 * @author mebtte<hi@mebtte.com>
 */
async function cmsGetSummaryData() {
  const data = await api.get<{
    user_total: number;
    figure_total: number;
    music_total: number;
    music_play_log_total: number;
    user_musicbill_total: number;
    verify_code_total: number;
  }>('/cms/get_summary_data', {
    withToken: true,
  });
  return {
    userTotal: data.user_total,
    figureTotal: data.figure_total,
    musicTotal: data.music_total,
    musicPlayLogTotal: data.music_play_log_total,
    userMusicbillTotal: data.user_musicbill_total,
    verifyCodeTotal: data.verify_code_total,
  };
}

export default cmsGetSummaryData;
