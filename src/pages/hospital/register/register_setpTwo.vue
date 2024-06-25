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
    <el-card class="box-card box-card-doctor">
      <!-- 卡片头部 -->
      <template #header>
        <div class="card-header">
          <span>挂号信息</span>
          <el-button type="primary" size="default">添加就诊人</el-button>
        </div>
      </template>
      <!-- 卡片的身体部分 -->
      <el-descriptions class="margin-top" :column="2" border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊日期：</div>
          </template>
          2023-06-06周二下午
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊医院：</div>
          </template>
          18100000000
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊科室：</div>
          </template>
          Suzhou
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生名字：</div>
          </template>
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生职称：</div>
          </template>
          District, Suzhou, Jiangsu Province
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生专长：</div>
          </template>
          District, Suzhou, Jiangsu Province
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医事服务器：</div>
          </template>
          trict, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <!-- 确定挂号 -->
    <div class="btn">
      <el-button class="determine" type="primary" size="default"> 确认挂号</el-button>
    </div>
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
  .box-card-doctor {
    box-shadow: 0px 0px 12px rgb(0, 0, 0, 0.1);
  }
  .btn {
    display: flex;
    justify-content: center;
    .determine {
      width: 140px;
      height: 40px;
      font-weight: 700;
      font-size: 16px;
      margin: 20px 0px;
    }
  }
}
</style>
