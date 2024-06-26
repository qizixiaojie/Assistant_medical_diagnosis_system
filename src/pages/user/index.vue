<template>
  <div class="user">
    <!-- 左侧显示导航区域 -->
    <!-- 左侧导航区域 -->
    <div class="menu">
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        &nbsp;<span>/ 会员中心</span>&nbsp;
      </div>

      <el-menu :default-active="$route.path" class="el-menu-vertical-demo el-menu">
        <el-menu-item index="/user/certification" @click="goUser('/user/certification')" class="el-menu-item">
          <el-icon><Postcard /></el-icon>
          <span :class="{ span: isActive == '/user/certification' }">实名认证</span>
        </el-menu-item>
        <el-menu-item index="/user/order" @click="goUser('/user/order')">
          <el-icon><document /></el-icon>
          <span :class="{ span: isActive == '/user/order' }">挂号订单</span>
        </el-menu-item>
        <el-menu-item index="/user/patient" @click="goUser('/user/patient')">
          <el-icon><User /></el-icon>
          <span :class="{ span: isActive == '/user/patient' }">就诊人管理</span>
        </el-menu-item>
        <el-menu-item index="/user/profile" @click="goUser('/user/profile')">
          <el-icon><document /></el-icon>
          <span :class="{ span: isActive == '/user/profile' }">账号信息</span>
        </el-menu-item>
        <el-menu-item index="/user/feedback" @click="goUser('/user/feedback')">
          <el-icon><ChatDotRound /></el-icon>
          <span :class="{ span: isActive == '/user/feedback' }">意见反馈</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧展示会员中心二级路由组件区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
//左侧的小图标
import { HomeFilled, Document, Postcard, User, ChatDotRound } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

//获取路由器对象
const $router = useRouter()
//获取路由对象
const $route = useRoute()
const isActive = ref()
//点击左侧菜单进行路由的跳转
const goUser = (path: string) => {
  isActive.value = path
  $router.push({ path: path })
}
</script>

<style scoped lang="scss">
.user {
  display: flex;
  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #b1a9a9;
      margin-right: 20px;
    }
    .el-menu {
      border-right: none;
      .el-menu-item {
        margin-top: 20px;
        .span::after {
          content: '';
          top: 24px;
          position: absolute;
          left: 0;
          top: 18px;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 10px solid #4490f1;
          z-index: 1;
        }
      }
    }
  }
  .content {
    flex: 8;
  }
}
</style>
