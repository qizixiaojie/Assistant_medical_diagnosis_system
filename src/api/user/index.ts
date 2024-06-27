import request from "@/utils/request";
import { OrderResponseData, PayReslt, QrCode, SubmitOrder, UseringoResponseData } from "./type";

enum API {
  //提交订单,获取订单号码接口
  SUBMITORDER_URL = '/order/orderInfo/auth/submitOrder/',
  //获取订单详情的数据
  GETORDERINFO_URL = '/order/orderInfo/auth/getOrderInfo/',
  //取消订单的接口
  ORDERCANCEL_URL = '/order/orderInfo/auth/cancelOrder/',
  //获取支付订单二维码接口
  QRCODE_URL = '/order/weixin/createNative/',
  //查询订单支付的结果
  PAYRESULT_URL = '/order/weixin/queryPayStatus/',
  //获取当前账号用户信息
  USERINFO_URL = '/user/auth/getUserInfo',
}
//提交订单
export const reqSubmitOrder = (hoscode: string, scheduleId: string, patientId: number) => request.post<any, SubmitOrder>(API.SUBMITORDER_URL + `${hoscode}/${scheduleId}/${patientId}`);
//获取订单详情的方法
export const reqOrderInfo = (id: string) => request.get<any, OrderResponseData>(API.GETORDERINFO_URL + id);
//取消订单
export const reqCancelOrder = (id: string) => request.get<any, any>(API.ORDERCANCEL_URL + id);
//获取支付二维码接口
export const reqQrcode = (orderId: string) => request.get<any, QrCode>(API.QRCODE_URL + orderId);
//查询订单支付的结果
export const reqQueryPayState = (orderId: string) => request.get<any, PayReslt>(API.PAYRESULT_URL + orderId);
//获取当前用户信息的接口
export const reqUserInfo = () => request.get<any, UseringoResponseData>(API.USERINFO_URL);