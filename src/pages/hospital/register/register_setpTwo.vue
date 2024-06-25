<template>
  <div class="container">
    <h1 class="tip">确认挂号信息</h1>
    <!-- 卡片展示就诊人信息 -->
    <el-card class="box-card">
      <!-- 卡片头部 -->
      <template #header>
        <div class="card-header">
          <span>请选择就诊人</span>
          <el-button type="primary" size="default" :icon="User">添加就诊人</el-button>
        </div>
      </template>
      <!-- 卡片的身体信息 -->
      <div class="user">
        <Visitor v-for="item in 4" :key="item" class="item" />
      </div>
    </el-card>

    <!-- 卡片：展示医生的信息 -->
  </div>
</template>

<script setup lang="ts">
import { User } from '@element-plus/icons-vue'
// 就诊人信息
import Visitor from './visitor.vue'
</script>

<style scoped lang="scss">
.container {
  .tip {
    font-weight: 700;
    color: #b1a9a9;
    font-size: 20px;
  }
  .box-card {
    margin-top: 20px;
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .user {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 32%;
        margin: 5px;
      }
    }
  }
}
</style>
