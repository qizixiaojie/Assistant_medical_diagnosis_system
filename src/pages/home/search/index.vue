<template>
  <div class="search">
    <!-- 像是使用组件都是要深度选择的 -->
    <el-autocomplete :trigger-on-focus="false" placeholder="请你输入医院名称" style="width: 600px" />
    <el-button type="primary" szie="default" :icon="Search" style="height: 48px">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
//引入element-plus提供的图标
import { Search } from '@element-plus/icons-vue'
</script>
<script lang="ts">
export default {
  name: 'search'
}
</script>

<style scoped lang="scss">
.search {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  :deep(.el-input__wrapper) {
    height: 48px;
    margin-right: 10px;
  }
}
</style>
