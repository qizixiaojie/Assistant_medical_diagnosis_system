//统一管理hospital模块接口
import request from "@/utils";

// 使用枚举获取接口地址
enum API {
  //获取医院卡片信息数据
  HOSPITAL_CARD = 'hospital/hospital_data/',
  //获取医院等级类别信息
  HOSPITAL_GRADE_CLASSIFY = '/hospital_grade/classify',
  //获取医院地区类别信息
  HOSPITAL_REGION_CLASSIFY = '/hospital_region/classify'
}
//获取医院卡片的数据
export const reqHospital_Card = (page: number, pageSize: number) => request.get<any, any>(API.HOSPITAL_CARD + `${page}/${pageSize}`)
//获取医院等级种类
export const reqHospital_Grade_Classify = () => request.get<any, any>(API.HOSPITAL_GRADE_CLASSIFY)
//获取医院地区种类信息
export const reqHospital_Region_Classify = () => request.get<any, any>(API.HOSPITAL_REGION_CLASSIFY)