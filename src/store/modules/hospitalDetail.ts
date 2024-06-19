import { defineStore } from 'pinia'
//获取请求方法
import { reqHospitalDetail } from "@/api/hospital/index.ts"

//获取请求约束ts类型
import type { HospitalDetail } from '@/api/hospital/type.ts'
import type { DetailState } from "./interface/index.ts"
import type { HosPitalDetail } from "@/api/hospital/type";
//pinia组合式api

const useDetailStore = defineStore('Detail', {
  state: (): DetailState => {
    return {
      //医院详情的数据
      hospitalInfo: ({} as HosPitalDetail)
    }
  },
  actions: {
    //获取医院详情的方法
    async getHospital(hoscode: string) {
      const result: HospitalDetail = await reqHospitalDetail(hoscode)
      if (result.code == 200) {
        this.hospitalInfo = result.data
      }
    }
  },
  getters: {}
})

//获取仓库的方法对外暴露
export default useDetailStore 