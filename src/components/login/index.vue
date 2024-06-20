<template>
  <div class="login_container">
    <el-dialog v-model="userStore.visable" title="用户登录" width="500">
      <!-- 对话框进行规划 -->
      <el-row>
        <!-- 左侧节后：收集号码登录，微信扫一扫登录 -->
        <el-col :span="12">
          <div class="login">
            <div v-show="scene == 0">
              <el-from>
                <el-from-item>
                  <el-input style="margin: 20px 0px" placeholder="请输入您的手机号码" :prefix-icon="User"></el-input>
                </el-from-item>
                <el-from-item>
                  <el-input placeholder="请输入您的手机验证码" :prefix-icon="Lock"></el-input>
                </el-from-item>
                <el-from-item>
                  <el-button style="margin: 20px 0px">获取验证码</el-button>
                </el-from-item>
              </el-from>
              <div class="bottom">
                <el-button style="width: 100%" type="primary" szie="default">用户登录</el-button>
                <div @click="changeScene">
                  <img src="@/assets/images/user_微信.png" style="width: 32px" />
                  <p>微信扫码登录</p>
                </div>
              </div>
            </div>
            <div class="webchat" v-show="scene == 1">微信扫码denglu</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="leftContent">
            <dvi class="top">
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
            </dvi>
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
import { ref } from 'vue'

//获取user仓库下面的数据visable，可以控制Login组件的对话框
import useUserStore from '@/store/modules/interface/user'
const userStore = useUserStore()

//控制微信扫码登录的
const scene = ref<number>(0) //0代表收集号码登录  如果是1 微信扫码登录

//点击微信扫码登录|微信小图标切换为微信扫码登录
const changeScene = () => {
  scene.value = 1
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
