import { reqUserLogin, reqUserRegister } from '@/api/user';
import { ElMessage } from 'element-plus';
import { defineStore } from 'pinia'


const useUserStore = defineStore('User', {
  state: () => {
    return {
      visiable: false, //控制用户登录组件的显示和isFormData: any隐藏
      userInfo: {}
    }
  },
  actions: {
    //用户注册方法
    async userRegister(isFormData: any) {
      const Data = {
        userName: isFormData.registerName,
        passWord: isFormData.registerPassword
      }
      const result: any = await reqUserRegister(Data)
      if (result.code == 200) {
        ElMessage({
          message: "注册成功，请登入",
          type: "success",
        });
      } else {
        alert('手机登录失败' + isFormData)
      }
    },
    //用户登入
    async userLogin(isFormData: any) {
      const Data = {
        userName: isFormData.loginName,
        passWord: isFormData.loginPassword
      }
      const result: any = await reqUserLogin(Data)

      if (result.code == 200) {
        this.userInfo = result.data
        ElMessage({
          message: "登录成功",
          type: "success",
        });
        this.visiable = false

      } else {
        alert('手机登录失败' + isFormData)
      }
    }
  },
  getters: {},
  //pinia持久化插件
  persist: {

    paths: ["userInfo"]
  } // name 字段用localstorage存储

  ,
})
export default useUserStore