import { defineStore } from 'pinia'
const useUserStore = defineStore('User', {
  state: () => {
    return {
      visiable: false //控制用户登录组件的显示和隐藏
    }
  },
  actions: {},
  getters: {}
})
export default useUserStore