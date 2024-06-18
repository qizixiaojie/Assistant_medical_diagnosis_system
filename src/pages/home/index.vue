<template>
  <div>
    <!-- 轮播图首页结构 -->
    <Carousel />
    <!-- 首页搜索表单区域 -->
    <Search />
    <!-- 底部展示医院的结构 -->
    <el-row :gutter="gutternum">
      <el-col :span="20">
        <!-- 等级 -->
        <Level />
        <!-- 地区 -->
        <Region />
        <!-- 展示医院结构 -->
        <div class="hospital">
          <Card class="item" v-for="item in 10" :key="item" />
        </div>
        <!-- 分页器 -->
        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]" :background="true" layout=" prev, pager, next, jumper,-> ,sizes,total" :total="13" />
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
//  引入医院结构信息卡片
import Card from './card/index.vue'

import { ref } from 'vue'

const gutternum=ref<number>(20)

//分页器需要的数据
//分页器的页码
const pageNo = ref<number>(1)
//一页展示几条数据
const pageSize = ref<number>(10)
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0px;
  }
}
</style>
