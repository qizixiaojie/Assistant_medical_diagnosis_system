// 定义用户相关的仓库
import { defineStore } from 'pinia'

const useUserStore = defineStore('User', {
  state: () => {
    return {
      visable: false//控制登录组件的dialog显示和隐藏
    }
  },
  actions: {},
  getters: {}
});
export default useUserStore