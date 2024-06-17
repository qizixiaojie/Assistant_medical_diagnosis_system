<template>
  <div>
    <!-- 轮播图首页结构 -->
    <Carousel />
    <!-- 首页搜索表单区域 -->
    <Search />
    <!-- 底部展示医院的结构 -->
    <el-row gutter="20">
      <el-col :span="20">
        <!-- 等级 -->
        <Level />
        <!-- 地区 -->
        <Region />
      </el-col>
      <el-col :span="4">4</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 引入轮播图组件
import Carousel from './carousel/index.vue'
// 引入首页搜索组件
import Search from './search/index.vue'
// 引入首页等级的组价
import Level from './level/index.vue'
// 引入地区组件
import Region from './region/index.vue'
</script>

<style scoped></style>
