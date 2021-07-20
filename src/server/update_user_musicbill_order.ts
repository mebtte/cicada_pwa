import api from '.';

/**
 * 更新歌单排序
 * @author mebtte<hi@mebtte.com>
 */
function updateUserMusicbillOrder(orderedUserMusicbillIdList: string[]) {
  return api.post<void>('/api/update_user_musicbill_order', {
    data: {
      ordered_user_musicbill_id_list: orderedUserMusicbillIdList,
    },
    withToken: true,
  });
}

export default updateUserMusicbillOrder;
