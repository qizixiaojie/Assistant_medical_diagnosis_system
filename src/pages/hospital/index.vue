<template>
  <div class="hospital">
    <!-- 左侧导航区域 -->
    <div class="menu">
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        &nbsp;<span>/ 医院信息</span>&nbsp;
      </div>

      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon><Document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon><Setting /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon><Search /></el-icon>
          <span>查询 / 取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 右侧内容展示区域：路由组件展示位置 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
//左侧的小图标
import { Document, Menu as IconMenu, Location, Setting, InfoFilled, Search, HomeFilled } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
//导入路由组件
const $router = useRouter()
//获取当前用户信息
const $route = useRoute()

//路由跳转事件
const changeActive = (path: string) => {
  $router.push({ path: `${path}` })
}
</script>

<style scoped lang="scss">
.hospital {
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
  }
  .content {
    flex: 8;
  }
}
</style>
