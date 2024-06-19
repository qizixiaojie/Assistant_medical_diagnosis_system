<template>
  <div class="hospital">
    <!-- 左侧导航区域 -->
    <div class="menu">
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        &nbsp;<span>/ 医院信息</span>&nbsp;
      </div>

      <el-menu :default-active="$route.path" class="el-menu-vertical-demo el-menu">
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')" class="el-menu-item">
          <el-icon><icon-menu /></el-icon>
          <span :class="{ span: isActive == '/hospital/register' }">预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon><Document /></el-icon>
          <span :class="{ span: isActive == '/hospital/detail' }">医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon><Setting /></el-icon>
          <span :class="{ span: isActive == '/hospital/notice' }">预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
          <el-icon><InfoFilled /></el-icon>
          <span :class="{ span: isActive == '/hospital/close' }">停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon><Search /></el-icon>
          <span :class="{ span: isActive == '/hospital/search' }">查询 / 取消</span>
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
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useDetailStore from '@/store/modules/hospitalDetail.ts'
//导入路由组件
const $router = useRouter()
//获取当前用户信息
const $route = useRoute()

onMounted(() => {
  isActive.value = $route.path
  getDetial()
})

//路由跳转事件
//为路由添加样式
const isActive = ref('')
const changeActive = (path: string) => {
  $router.push({ path: `${path}` })
  isActive.value = path
}

//组件挂载完毕，通知pinia仓库发请求获取医院详情的数据，存储在仓库中
const detailStore = useDetailStore()
//获取信息函数
const getDetial = async () => {
  await detailStore.getHospital($route.query.hoscode)
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
    .el-menu {
      .el-menu-item {
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
