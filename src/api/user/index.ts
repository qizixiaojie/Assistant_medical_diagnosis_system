import request from "@/utils/request";
import { OrderResponseData, SubmitOrder } from "./type";

enum API {
  //提交订单,获取订单号码接口
  SUBMITORDER_URL = '/order/orderInfo/auth/submitOrder/',
   //获取订单详情的数据
   GETORDERINFO_URL = '/order/orderInfo/auth/getOrderInfo/',
}
//提交订单
export const reqSubmitOrder = (hoscode: string, scheduleId: string, patientId: number) => request.post<any, SubmitOrder>(API.SUBMITORDER_URL + `${hoscode}/${scheduleId}/${patientId}`);
//获取订单详情的方法
export const reqOrderInfo = (id: string) => request.get<any, OrderResponseData>(API.GETORDERINFO_URL + id);