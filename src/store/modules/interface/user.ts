// 定义用户相关的仓库
import { defineStore } from 'pinia'
//引入获取验证码的请求方法
import { reqCode, reqUserLogin } from '@/api/hospital';
import type { LoginData, UserLoginResponseData, UserInfo } from '@/api/hospital/type';
import type { UserState } from './index.ts';

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      visable: false,//控制登录组件的dialog显示和隐藏
      code: '',//存储验证码
      userInfo: ({} as UserInfo)//用户信息，name，token，如果是没有使用插件，这里就只能使用获取本地存储了
    }
  },
  actions: {
    //获取验证码方法
    async getCode(phone: string) {
      const result: any = await reqCode(phone)
      console.log(result)
      if (result.code == 200) {
        this.code = result.data//赋值
        return 'ok'
      }
      else {
        return Promise.reject(new Error(result.message))
      }

    },
    //用户手机号码登录方法
    async userLogin(isFormData: LoginData) {
      const result: UserLoginResponseData = await reqUserLogin(isFormData)
      if (result.code == 200) {
        this.userInfo = result.data
      } else {
        alert('手机登录失败')
      }
    },
    //退出登录方法
    loginout() {
      this.userInfo = {} as UserInfo
      localStorage.removeItem('userInfo')
    }
  },
  getters: {},
  //pinia持久化插件
  persist: {
    paths: ['userInfo'],
  },
});
export default useUserStore