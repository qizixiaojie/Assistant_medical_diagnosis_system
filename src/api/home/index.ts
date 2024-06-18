//统一管理首页模块接口
import request from "@/utils/request";
//获取类型
import type { HospitalResponseData, HospitalLevelAndRegionResponseData } from "./type.ts"
//通过枚举管理首页模块的接口地址
enum API {
  //获取已有的医院的数据接口地址
  HOSPITAL_URL = '/hosp/hospital',
  // 获取医院的等级与地区
  HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/'
}
//获取医院的数据
export const reqHospital = (page: number, limit: number) => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `/${page}/${limit}`)
//获取医院的等级或者获取医院地区的数据
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL + dictCode)