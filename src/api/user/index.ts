import request from "@/utils";

//枚举API
enum API {
  //用户注册接口
  USER_REGISTER = '/user/register',
  //用户登录接口
  USER_LOGIN = '/user/login',
  //用户忘记密码接口
  USER_LOGOUT = '/user/logout',
  //添加预约信息
  USER_ORDER = '/user/order',
}
//用户注册接口
export const reqUserRegister = ({ userName, passWord }: any) => request.post(API.USER_REGISTER, { userName, passWord });
//用户登录接口
export const reqUserLogin = ({ userName, passWord }: any) => request.post(API.USER_LOGIN, { userName, passWord })
//用户忘记密码接口
export const reqUserLogout = ({ userName, newPassword }: any) => request.post(API.USER_LOGOUT, { userName, newPassword })
//用户添加预约信息
export const reqUserOrder = (data: any) => request.post(API.USER_ORDER, { data })



