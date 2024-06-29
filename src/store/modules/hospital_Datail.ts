import { reqHospital_Detail } from "@/api/hospital_import";
import { defineStore } from "pinia"

const useDetailStore = defineStore("Detail", {
  state: () => {
    return {
      //医院详情数据
      hospitalInfo: {}
    }
  },
  actions: {
    //获取医院详情的方法
    async getHospital(hoscode: string) {
      const result = await reqHospital_Detail(hoscode)
      console.log(result.data);

      if (result.code == 200) {
        this.hospitalInfo = result.data
      }
    },
  },
  getters: {}
})
//对外暴露仓库
export default useDetailStore