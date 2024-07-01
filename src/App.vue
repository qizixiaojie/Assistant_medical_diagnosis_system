<template>
  <div class="container">
    <!-- 顶部组件 -->
    <Hospital_top />
    <div class="content">
      <!-- 展示路由组件 -->
      <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <Hospital_bottom />
    <Login v-if="userStore.visiable" />
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/interface/user'
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
