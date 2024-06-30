import request from "@/utils";

// 枚举请求地址
enum API {
  //获取医院详情信息
  HOSPITAL_DETAIL = '/hospital_detail/',
  // 获取医院部门信息
  HOSPITAL_DEPART = '/hospital_depart/departments'
}
//获取医院详情信息的接口
export const reqHospital_Detail = (hoscode: string) => request.get<any, any>(API.HOSPITAL_DETAIL + `${hoscode}`)
// 获取医院部门信息接口
export const reqHospital_Depart = () => request.get<any, any>(API.HOSPITAL_DEPART)