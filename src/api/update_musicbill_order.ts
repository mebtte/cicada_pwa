import api from '.';

/**
 * 更新歌单排序
 * @author mebtte<hi@mebtte.com>
 */
function updateMusicbillOrder(orderMap: { [key: string]: number }) {
  return api.put<void>('/1/musicbill/order', {
    data: {
      order_map: orderMap,
    },
    withToken: true,
  });
}

export default updateMusicbillOrder;
