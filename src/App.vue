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
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import request from './utils'
onMounted(() => {
  getCarData()
})

//获取卡片数据
const getCarData = async () => {
  const reslut = await request.get('/hospital/hospital_data/1')
  console.log(reslut.data)
}
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
