import api from '.';

/**
 * 获取登录验证码
 * @author mebtte<hi@mebtte.com>
 */
function getSigninVerifyCode(email) {
  return api.get('/get_signin_verify_code', {
    params: {
      email,
    },
  });
}

export default getSigninVerifyCode;
