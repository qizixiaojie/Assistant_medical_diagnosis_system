<template>
  <div class="login_container">
    <el-dialog v-model="userStore.visiable" title="用户登录" width="500">
      <!-- 对话框进行规划 -->
      <el-row>
        <!-- 左侧节后：收集号码登录，微信扫一扫登录 -->
        <el-col :span="12">
          <div class="login">
            <div v-show="scene == 1">
              <el-form :model="isFormData" ref="formRef">
                <el-form-item prop="phone">
                  <el-input style="margin-top: 30px" placeholder="请输入您的手机号码" :prefix-icon="User" v-model="isFormData.phone"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="请输入您的手机验证码" style="margin-top: 30px" :prefix-icon="Lock" v-model="isFormData.code"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button style="margin-top: 20px">获取验证码</el-button>
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

            <!-- <div class="webchat" v-show="scene == 0" style="text-align: center">
              <img src="@/assets/images/二维码_登入.png" />
              <p style="color: #b1a9a9; cursor: pointer" @click="infoLogin">短信 登录</p>
            </div> -->
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
const userStore = useUserStore()

//控制微信扫码登录的
const scene = ref<number>(1) //0代表收集号码登录  如果是1 微信扫码登录

//点击微信扫码登录|微信小图标切换为微信扫码登录
const changeScene = () => {
  //微信扫码登录需要一些费用，暂时不适用
  scene.value = 0
}
const infoLogin = () => {
  scene.value = 1
}
//收集表单数据
const isFormData = reactive({
  phone: '', //收集收集号码
  code: '' //收集验证码
})
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
