<template>
  <div>
    <!-- 轮播图首页结构 -->
    <Carousel />
    <!-- 首页搜索表单区域 -->
    <Search />
  </div>
</template>

<script setup lang="ts">
// 引入轮播图组件
import Carousel from './carousel/index.vue'
// 引入首页搜索组件
import Search from './search/index.vue'
</script>

<style scoped></style>
