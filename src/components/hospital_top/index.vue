<template>
  <div class="top">
    <div class="content">
      <!-- 左侧 -->
      <div class="left" @click="goHome">
        <img src="@/assets/images/log.png" alt="" />
        <p>柒子诊所 线上助诊平台</p>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <p class="help">帮助中心</p>
        <!-- 如果有用户的基本信息 -->
        <p class="login" @click="login" v-if="!userStore.userInfo.userName">
          登入/注册中心
        </p>
        <!-- 如果没有用户信息 -->
        <p class="login" v-else>
          <el-dropdown>
            <span class="el-dropdown-link" style="margin-top: 4px">
              {{ userStore.userInfo.userName }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="goUser_oder">挂号订单</el-dropdown-item>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/interface/user";
const userStore = useUserStore();
const $router = useRouter();
//去往首页
const goHome = () => {
  $router.push({ path: "/home" });
};
//点击登录与注册按钮的时候弹出对话框
const login = () => {
  userStore.visiable = true;
};
//点击退出登录清除数据
const logout = () => {
  userStore.logout();
  $router.push({ path: "/home" });
};
// 去预约表单的页面
const goUser_oder = () => {
  $router.push({ path: "/user" });
};
</script>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  .content {
    width: 1200px;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
      }
      p {
        font-size: 20px;
        color: #1296db;
      }
    }
    .right {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #b1a9a9;
      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>
