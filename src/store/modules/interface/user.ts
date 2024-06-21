// 定义用户相关的仓库
import { defineStore } from 'pinia'
//引入获取验证码的请求方法
import { reqCode } from '@/api/hospital';
import { ElMessage } from 'element-plus';

const useUserStore = defineStore('User', {
  state: () => {
    return {
      visable: false,//控制登录组件的dialog显示和隐藏
      code: ''//存储验证码
    }
  },
  actions: {
    //获取验证码方法
    async getCode(phone: string) {
      const result: any = await reqCode(phone)
      console.log(result)
      if (result.code == 200) {
        ElMessage({
          message: '获取验证码成功',
          type: 'success'
        })
        this.code = result.data//赋值
        return 'ok'
      }
      else {
        ElMessage({
          message: '获取验证码失败',
          type: 'error'
        })
        return Promise.reject(new Error(result.message))
      }

    }
  },
  getters: {}
});
export default useUserStore