/* eslint-disable camelcase */
import api from '.';

/**
 * CMS 获取用户操作记录列表
 * @author mebtte<hi@mebtte.com>
 */
function cmsGetUserOperateRecordList({
  targetUserId,
  page = 1,
  pageSize = 20,
}: {
  targetUserId?: string;
  page?: number;
  pageSize?: number;
}) {
  return api.get<{
    total: number;
    list: {
      id: number;
      type: 'modify' | 'create';
      operate_user: { id: string; nickname: string };
      target_user_id: string;
      content?: string;
      operate_time: string;
    }[];
  }>('/api/cms/get_user_operate_record_list', {
    withToken: true,
    params: { target_user_id: targetUserId, page, page_size: pageSize },
  });
}

export default cmsGetUserOperateRecordList;
