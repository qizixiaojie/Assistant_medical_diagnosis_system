import { reqHospital_Detail } from "@/api/hospital_import";
import { defineStore } from "pinia"

const useDetailStore = defineStore("Detail", {
  state: (): any => {
    return {
      //医院详情数据
      hospitalInfo: ({} as any)
    }
  },
  actions: {
    //获取医院详情的方法
    async getHospital(hoscode: string) {
      const result = await reqHospital_Detail(hoscode)
      if (result.code == 200) {
        this.hospitalInfo = result.data[0]
      }
    },
  },
  getters: {}
})
//对外暴露仓库
export default useDetailStore