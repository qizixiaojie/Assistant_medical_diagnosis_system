//统一管理hospital模块接口
import request from "@/utils";

// 使用枚举获取接口地址
enum API {
  //获取医院卡片信息数据
  HOSPITAL_CARD = 'hospital/hospital_data/'
}
//获取医院卡片的数据
export const reqHospitalCard = (page: number, pageSize: number) => request.get<any, any>(API.HOSPITAL_CARD + `${page}/${pageSize}`)