<template>
  <div class="container">
    <!-- 顶部组件 -->
    <Hospital_top />
    <div class="content">
      <!-- 展示路由组件 -->
      <router-view></router-view>
    </div>
    <Hospital_bottom />
    <!-- 登录组件 -->
    <Login v-if="userStore.visable" />
  </div>
</template>

<script setup lang="ts">
//引入用户仓库
import useUserStore from './store/modules/interface/user'
const userStore = useUserStore()
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 100px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>
