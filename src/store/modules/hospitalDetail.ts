import { defineStore } from 'pinia'
//获取请求方法
import { reqHospitalDetail } from "@/api/hospital/index.ts"

//获取请求约束ts类型
import { HospitalDetail } from '@/api/hospital/type.ts'
//pinia组合式api

const useDetailStore = defineStore('Detail', {
  state: () => {
    return {
      //医院详情的数据
      hospitalInfo: {}
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