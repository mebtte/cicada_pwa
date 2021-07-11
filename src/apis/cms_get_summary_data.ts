/* eslint-disable camelcase */
import api from '.';

/**
 * CMS 获取概要数据
 * @author mebtte<hi@mebtte.com>
 */
function cmsGetSummaryData() {
  return api.get<{
    user_total: number;
    figure_total: number;
    music_total: number;
    music_play_log_total: number;
    user_musicbill_total: number;
    verify_code_total: number;
    email_notification_total: number;
  }>('/cms/get_summary_data', {
    withToken: true,
  });
}

export default cmsGetSummaryData;
