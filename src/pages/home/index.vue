<template>
  <!-- 轮播图组件 -->
  <carousel />
  <!-- 搜索组件 -->
  <search />
  <!-- 底部展示医院的结构 -->
  <!-- 间距20px -->
  <el-row :gutter="50">
    <el-col :span="20">
      <!-- 等级 -->
      <level />
      <!-- 地区组件 -->
      <region />
      <!-- 展示医院组件 -->
      <div class="hospital">
        <card class="item" v-for="(item, index) in hospitalCarData" :key="index" :hospitalCarData="item" />
        <!-- 分页器 -->
        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]" :background="true" layout=" prev, pager, next, jumper,-> ,sizes,total" @current-change="currentChange" @size-change="sizeChange" :total="32" />
      </div>
    </el-col>
    <el-col :span="4">
      <tip />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
//导入轮播图组件
import carousel from '@/pages/home/carousel/index.vue'
//引入首页搜索的组件
import search from '@/pages/home/search/index.vue'
//导入等级组件
import level from '@/pages/home/level/index.vue'
//导入侧边栏组件
import tip from '@/pages/home/tip/index.vue'
//导入地区组件
import region from '@/pages/home/region/index.vue'
//导入卡片
import card from '@/pages/home/card/index.vue'
import { onMounted, ref } from 'vue'
import { reqHospital_Card } from '@/api/hospital'
onMounted(() => {
  getCarData()
})

//分页器模块
const pageNo = ref<number>(1)
const pageSize = ref<number>(10) //显示多少个
// 存储医院卡片数据
const hospitalCarData = ref([])

//获取卡片数据
const getCarData = async () => {
  const result = await reqHospital_Card(pageNo.value, pageSize.value)
  if (result.code) {
    hospitalCarData.value = result.data
  }
}

//分页器
const currentChange = () => {
  getCarData()
}
//分页器选择级别发生变化的时候触发
const sizeChange = () => {
  //当前页面回归第一页
  pageNo.value = 1
  getCarData()
}
</script>
<script lang="ts">
name: 'Home_level'
</script>
<style scoped>
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
