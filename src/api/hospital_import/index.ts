import request from "@/utils";

// 枚举请求地址
enum API{
  HOSPITAL_DETAIL='/hospital_detail/'
}
//获取医院详情信息的接口
export const reqHospital_Detail=(hoscode:string)=>request.get<any,any>(API.HOSPITAL_DETAIL+`${hoscode}`)