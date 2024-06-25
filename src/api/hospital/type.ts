//定义详情模块数据ts类型
export interface ResponseData {
  code: number,
  message: string,
  ok: boolean,
}
//代表医院详情的数据
export interface HosPitalDetail {
  "bookingRule": {
    "cycle": number,
    "releaseTime": string,
    "stopTime": string,
    "quitDay": number,
    "quitTime": string,
    "rule": string[]
  },
  "hospital": {
    "id": string,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
      "hostypeString": string,
      "fullAddress": string
    },
    "hoscode": string,
    "hosname": string,
    "hostype": string,
    "provinceCode": string,
    "cityCode": string,
    "districtCode": string,
    "address": string,
    "logoData": string,
    "intro": null,
    "route": string,
    "status": number,
    "bookingRule": null
  }
}

//医院详情返回数据ts
export interface HospitalDetail extends ResponseData {
  data: HosPitalDetail
}

//代表医院科室的数据
export interface Deparment {
  "depcode": string,
  "depname": string,
  "children"?: Deparment[]
}
//代表存储科室数组类型
export type DeparmentArr = Deparment[]
//获取科室接口放回的数据类型
export interface DeparmentResponseData extends ResponseData {
  data: DeparmentArr
}

//用户登录接口需要携带参数类型
export interface LoginData {
  phone: string,
  code: string
}

//登录接口返回用户信息数据
export interface UserInfo {
  name: string,
  token: string
}

//登录接口返回的数据的ts类型
export interface UserLoginResponseData extends ResponseData {
  data: UserInfo
}

//获取的科室数据
export interface BaseMap {
  "workDateString": string,
  "releaseTime": string,
  "bigname": string,
  "stopTime": string,
  "depname": string,
  "hosname": string
}
//获取当前科室数据预约挂号数据
export interface WorkData {
  "workDate": string,
  "workDateMd": string,
  "dayOfWeek": string,
  "docCount": number,
  "reservedNumber": null,
  "availableNumber": number,
  "status": number
}

//一共返回的医院数据
export type BookingScheduleList = WorkData[]
export interface HospitalWordData extends ResponseData {
  data: {
      total: number,
      bookingScheduleList: BookingScheduleList,
      baseMap: BaseMap
  }
}