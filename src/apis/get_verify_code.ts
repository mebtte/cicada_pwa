import api from '.';
import { Type as VerifyCodeType } from '../constants/verify_code';

/**
 * 获取验证码
 * @author mebtte<hi@mebtte.com>
 * @param {Object} option
 *  - {String} email 邮箱
 *  - {String} type 类型
 * @return {Promise<Void>}
 */
function getVerifyCode({
  email,
  type,
}: {
  email: string;
  type: VerifyCodeType;
}) {
  return api.get('/verify_code', {
    params: {
      type,
      email,
    },
  });
}

export default getVerifyCode;
