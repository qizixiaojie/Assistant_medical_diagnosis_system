<template>
  <div class="login_container">
    <el-dialog v-model="isRegister" title="用户注册" width="500">
      <!-- 对话框进行规划 -->
      <el-row>
        <!-- 左侧节后：收集号码登录，微信扫一扫登录 -->
        <el-col :span="12">
          <div class="login">
            <div>
              <el-form :model="isRegisterData" :rules="isRegisterRules" ref="registerRef">
                <el-form-item prop="registerName">
                  <el-input style="margin-top: 30px" placeholder="请输入您的名字" :prefix-icon="User" v-model="isRegisterData.registerName"></el-input>
                </el-form-item>
                <el-form-item prop="registerPassword">
                  <el-input placeholder="请输入您的密码" type="password" show-password style="margin-top: 30px" :prefix-icon="Lock" v-model="isRegisterData.registerPassword"></el-input>
                </el-form-item>
              </el-form>
              <div class="bottom">
                <el-button style="width: 100%" type="primary" szie="default" @click="userRegister(registerRef)">用户注册</el-button>
                <div @click="changeScene">
                  <img src="@/assets/images/user_微信.png" style="width: 32px" />
                  <p>微信扫码登录</p>
                </div>
              </div>
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
        <el-button
          size="default"
          @click="
            () => {
              userStore.visiable = false
            }
          "
          >关闭窗口</el-button
        >
      </template>
    </el-dialog>
    <el-dialog v-model="userStore.visiable" title="用户登录" width="500">
      <!-- 对话框进行规划 -->
      <el-row>
        <!-- 左侧节后：收集号码登录，微信扫一扫登录 -->
        <el-col :span="12">
          <div class="login">
            <div>
              <el-form :model="isLoginData" :rules="isLoginRules" ref="loginRef">
                <el-form-item prop="loginName">
                  <el-input style="margin-top: 30px" placeholder="请输入您的手机号码" :prefix-icon="User" v-model="isLoginData.loginName"></el-input>
                </el-form-item>
                <el-form-item prop="loginPassword">
                  <el-input placeholder="请输入您的手机验证码" style="margin-top: 30px" :prefix-icon="Lock" v-model="isLoginData.loginPassword"></el-input>
                </el-form-item>
              </el-form>
              <div class="bottom">
                <el-button style="width: 100%" type="primary" szie="default" @click="userLogin(loginRef)">用户登录</el-button>
                <el-button style="width: 100%; margin: 20px 0px 0px 0px" type="primary" szie="default" @click="registeRuser">注册用户</el-button>
                <p style="width: 20%; margin: 20px 0px 0px 0px" type="primary" szie="default" @click="userForget">忘记密码</p>
                <div @click="changeScene">
                  <img src="@/assets/images/user_微信.png" style="width: 32px" />
                  <p>微信扫码登录</p>
                </div>
              </div>
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
        <el-button
          size="default"
          @click="
            () => {
              userStore.visiable = false
            }
          "
          >关闭窗口</el-button
        >
      </template>
    </el-dialog>
    <el-dialog v-model="isLogout" title="忘记密码" width="500">
      <!-- 对话框进行规划 -->
      <el-row>
        <!-- 左侧节后：收集号码登录，微信扫一扫登录 -->
        <el-col :span="12">
          <div class="login">
            <div>
              <el-form :model="isLogoutData" ref="logoutRef">
                <el-form-item prop="logoutName">
                  <el-input style="margin-top: 30px" placeholder="请输入您的手机号码" :prefix-icon="User" v-model="isLogoutData.logoutName"></el-input>
                </el-form-item>
                <el-form-item prop="logoutPassword">
                  <el-input placeholder="请输入您的手机验证码" style="margin-top: 30px" :prefix-icon="Lock" v-model="isLogoutData.logoutPassword"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button style="margin-top: 20px">获取验证码</el-button>
                </el-form-item>
              </el-form>
              <div class="bottom">
                <el-button style="width: 100%" type="primary" szie="default" @click="userLogin">用户登录</el-button>
                <div @click="changeScene">
                  <img src="@/assets/images/user_微信.png" style="width: 32px" />
                  <p>微信扫码登录</p>
                </div>
              </div>
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
        <el-button
          size="default"
          @click="
            () => {
              userStore.visiable = false
            }
          "
          >关闭窗口</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'

//获取user仓库下面的数据visable，可以控制Login组件的对话框
import useUserStore from '@/store/modules/interface/user'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
const userStore = useUserStore()

//注册的相关规则
//收集注册数据
const registerRef = ref()
const isRegisterData = reactive({
  registerName: '',
  registerPassword: ''
})

//规则
const isRegisterRules = reactive({
  registerName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 6, max: 18, message: '用户名长度应为6-18个字符', trigger: 'blur' }
  ],
  registerPassword: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '密码长度应为6-18个字符', trigger: 'blur' }
  ]
})
//控制注册还是登录
const isRegister = ref(false)
const isLogout = ref(false)
//切换用户注册
const userRegister = (registerRef: any) => {
  registerRef.validate((valid: any) => {
    if (valid) {
      userStore.visiable = true
      isRegister.value = false
      isLogout.value = false
      userStore.userRegister(isRegisterData)

      //调用注册接口
    } else {
      ElMessage({
        message: '请你重新输入',
        type: 'error'
      })
    }
  })
}

//登录相关规则
//收集登录数据
const loginRef = ref()
const isLoginData = reactive({
  loginName: '',
  loginPassword: ''
})
const isLoginRules = reactive({
  loginName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 6, max: 18, message: '用户名长度应为6-18个字符', trigger: 'blur' }
  ],
  loginPassword: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '密码长度应为6-18个字符', trigger: 'blur' }
  ]
})
//切换用户登录
const userLogin = (loginRef: any) => {
  loginRef.validate((valid: any) => {
    if (valid) {
      console.log(isLoginData)

      userStore.visiable = true
      isRegister.value = false
      isLogout.value = false
      userStore.userLogin(isLoginData)

      //调用注册接口
    } else {
      ElMessage({
        message: '请你重新输入',
        type: 'error'
      })
    }
  })
}

//忘记密码相关规则
//收集忘记密码数据
const logoutRef = ref()
const isLogoutData = reactive({
  logoutName: '',
  logoutPassword: ''
})

//切换忘记密码
const userForget = () => {
  userStore.visiable = false
  isRegister.value = false
  isLogout.value = true
}

//切换注册用户
const registeRuser = () => {
  userStore.visiable = false
  isRegister.value = true
  isLogout.value = false
}
//控制微信扫码登录的
const scene = ref<number>(1) //0代表收集号码注册  如果是1 微信扫码登录  如果 2 忘记密码

//点击微信扫码登录|微信小图标切换为微信扫码登录
const changeScene = () => {
  //微信扫码登录需要一些费用，暂时不适用
  scene.value = 0
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
