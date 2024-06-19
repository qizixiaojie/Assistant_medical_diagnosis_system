import { defineStore } from 'pinia'
//获取请求方法
import { reqHospitalDetail, reqHospitalDeparment } from "@/api/hospital/index.ts"

//获取请求约束ts类型
import type { HospitalDetail } from '@/api/hospital/type.ts'
import type { DetailState } from "./interface/index.ts"
import type { HosPitalDetail, DeparmentResponseData } from "@/api/hospital/type";
//pinia组合式api

const useDetailStore = defineStore('Detail', {
  state: (): DetailState => {
    return {
      //医院详情的数据
      hospitalInfo: ({} as HosPitalDetail),
      //存储医院科室的数据
      deparmentArr: []
    }
  },
  actions: {
    //获取医院详情的方法
    async getHospital(hoscode: string) {
      const result: HospitalDetail = await reqHospitalDetail(hoscode)
      if (result.code == 200) {
        this.hospitalInfo = result.data
      }
    },
    //获取一个医院科室的数据
    async getDeparment(hoscode: string) {
      const result: DeparmentResponseData = await reqHospitalDeparment(hoscode)
      if (result.code == 200) {
        this.deparmentArr = result.data
      }

    }
  },
  getters: {}
})

//获取仓库的方法对外暴露
export default useDetailStore 