<template>
  <div class="login_container">
    <el-dialog v-model="userStore.visable" title="用户登录" width="500">
      <!-- 对话框进行规划 -->
      <el-row>
        <!-- 左侧节后：收集号码登录，微信扫一扫登录 -->
        <el-col :span="12">
          <div class="login">
            <div v-show="scene == 1">
              <el-form :model="isFormData" :rules="isFormRules" ref="formRef">
                <el-form-item prop="isPhone">
                  <el-input style="margin-top: 30px" placeholder="请输入您的手机号码" :prefix-icon="User" v-model="isFormData.isPhone"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="请输入您的手机验证码" style="margin-top: 30px" :prefix-icon="Lock" v-model="isFormData.code"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button style="margin-top: 20px" @click="validateForm(formRef)" :disabled="isDisabled">获取验证码{{ countDown }}</el-button>
                </el-form-item>
              </el-form>
              <div class="bottom">
                <el-button style="width: 100%" type="primary" szie="default">用户登录</el-button>
                <div @click="changeScene">
                  <img src="@/assets/images/user_微信.png" style="width: 32px" />
                  <p>微信扫码登录</p>
                </div>
              </div>
            </div>

            <div class="webchat" v-show="scene == 0" style="text-align: center">
              <img src="@/assets/images/二维码_登入.png" />
              <p style="color: #b1a9a9; cursor: pointer" @click="infoLogin">短信 登录</p>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="leftContent">
            <div class="top">
              <div class="item">
                <img src="@/assets/images/code_app.png" />
                <img src="@/assets/images/user_灰微信 (1).png" style="width: 32px; height: 32px" />
                <p>微信扫一扫关注</p>
                <p>“快速预约挂号”</p>
              </div>
              <div class="item">
                <img src="@/assets/images/code_login_wechat.png" />
                <img src="@/assets/images/user_手机.png" style="width: 32px; height: 32px" />
                <p>扫一扫下载</p>
                <p>“预约挂号”APP</p>
              </div>
            </div>
          </div>
          <div class="tips">
            <p>柒子药业官方指定平台</p>
            <p>快速挂号 安全放心</p>
          </div>
        </el-col>
      </el-row>
      <template #footer>
        <el-button size="default">关闭窗口</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

//获取user仓库下面的数据visable，可以控制Login组件的对话框
import useUserStore from '@/store/modules/interface/user'
import { ElMessage } from 'element-plus'
const userStore = useUserStore()

//控制微信扫码登录的
const scene = ref<number>(1) //0代表收集号码登录  如果是1 微信扫码登录

//点击微信扫码登录|微信小图标切换为微信扫码登录
const changeScene = () => {
  scene.value = 0
}
const infoLogin = () => {
  scene.value = 1
}

//收集表单数据
const isFormData = reactive({
  isPhone: '', //收集收集号码
  code: '' //收集验证码
})
//定制表当校验规则
const isFormRules = reactive({
  isPhone: [
    // 只保留必要的规则，并且修改 message 以反映其目的
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    // 保持手机号码格式验证规则不变，但修改 message 以反映验证失败的情况
    { pattern: /^1[3-9]\d{9}$/, message: '手机号码格式不正确', trigger: 'blur' } // 添加了 trigger 属性
  ]
})

const formRef = ref() //获取表单，鉴定是否符合数据
const isDisabled = ref(false) //限定获取验证码按钮
const countDown = ref('') //控制倒计时
//触发鉴定函数
const validateForm = (formRef: any) => {
  formRef.validate((valid: any) => {
    if (valid) {
      countDown_F() //触发倒计时函数
    } else {
      isDisabled.value = true
      ElMessage({
        message: '您未输入完整的手机号码',
        type: 'error'
      })
      setTimeout(() => {
        isDisabled.value = false
      }, 2000)
      return false
    }
  })
}

//获取验证码
const getCode = async () => {
  //通知pinia仓库存储验证码
  try {
    //成功
    await userStore.getCode(isFormData.isPhone)
    isFormData.code = userStore.code
  } catch (error) {
    //失败
  }
}
//触发倒计时函数
const control = ref<boolean>(false) // 初始时不阻止点击
const countDown_F = () => {
  const time = ref<number>(60)
  if (!control.value) {
    // 只有在 control 为 false 时才执行倒计时
    getCode() //获取验证码函数
    control.value = true // 阻止再次点击
    const TimeId = setInterval(() => {
      time.value -= 1
      countDown.value = `(${time.value})`
      if (time.value <= 0) {
        // 假设我们想在时间到 0 时停止
        clearInterval(TimeId)
        countDown.value = ''
        time.value = 60
        control.value = false // 允许再次点击
      }
    }, 1000)
  } else {
    ElMessage({
      message: '不可重复点击获取函数',
      type: 'error'
    })
  }
}
</script>
<script lang="ts">
export default {
  name: 'Login'
}
</script>

<style scoped lang="scss">
.login_container {
  ::v-deep(.el-dialog) {
    min-height: 400px;
    min-width: 960px;
    .el-dialog__body {
      border-top: 1px solid rgb(115, 204, 239, 0.5);
      border-bottom: 1px solid rgb(115, 204, 239, 0.5);
    }
  }

  .login {
    padding: 20px;
  }
  .bottom {
    cursor: pointer;
    div {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        margin-left: 5px;
      }
    }
  }
  .leftContent {
    .top {
      margin-top: 24px;
      display: flex;
      justify-content: space-around;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 0px;
        img {
          margin: 10px 0px;
          width: 130px;
          height: 130px;
        }
      }
    }
  }
  .tips {
    text-align: center;
    margin: 20px 0px;
    p {
      margin: 10px 0px;
      font-weight: 700px;
      opacity: 0.5;
      font-style: italic;
      letter-spacing: 2px;
      font-size: 24px;
    }
  }
}
</style>
