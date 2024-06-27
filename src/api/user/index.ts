import request from "@/utils/request";
import { OrderResponseData, SubmitOrder } from "./type";

enum API {
  //提交订单,获取订单号码接口
  SUBMITORDER_URL = '/order/orderInfo/auth/submitOrder/',
   //获取订单详情的数据
   GETORDERINFO_URL = '/order/orderInfo/auth/getOrderInfo/',
   //取消订单的接口
   ORDERCANCEL_URL = '/order/orderInfo/auth/cancelOrder/',
}
//提交订单
export const reqSubmitOrder = (hoscode: string, scheduleId: string, patientId: number) => request.post<any, SubmitOrder>(API.SUBMITORDER_URL + `${hoscode}/${scheduleId}/${patientId}`);
//获取订单详情的方法
export const reqOrderInfo = (id: string) => request.get<any, OrderResponseData>(API.GETORDERINFO_URL + id);
//取消订单
export const reqCancelOrder = (id: string) => request.get<any, any>(API.ORDERCANCEL_URL + id);