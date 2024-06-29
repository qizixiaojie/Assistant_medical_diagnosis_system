<template>
  <div class="info">
    <h1>{{ hospitalStore.hospitalInfo.hosname }}停诊信息</h1>
    <el-empty description="暂无信息 "></el-empty>
  </div>
</template>

<script setup lang="ts">
//引入医院详情仓库的数据
import useDetailStore from '@/store/modules/hospital_Datail.ts'
const hospitalStore = useDetailStore()
</script>

<style scoped lang="scss">
.info {
  h1 {
    color: rgb(182, 57, 57);
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  }
}
</style>
