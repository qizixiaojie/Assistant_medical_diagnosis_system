<template>
  <div class="container">
    <!-- 顶部组件 -->
    <Hospital_top />
    <div class="content">
      <!-- 展示路由组件 -->
      <router-view></router-view>
    </div>
    <Hospital_bottom />
  </div>
</template>

<script setup lang="ts">
import request from './utils/request'
import { onMounted } from 'vue'
onMounted(() => {
  request.get('/hosp/hospital/1/10').then(res => {
    console.log('App组件展示获取的数据', res)
  })
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
    background-color: rgb(16, 121, 121);
  }
}
</style>
