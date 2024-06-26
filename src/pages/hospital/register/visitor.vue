<template>
  <div class="visitor">
    <div class="top">
      <div class="left">
        <span class="free">{{ user.isInsure == 1 ? '医保' : '自费' }}</span>
        <span class="username">{{ user.name }}</span>
      </div>
      <div class="right">
        <el-button circle type="primary" size="default" :icon="Edit"></el-button>
      </div>
    </div>
    <div class="bottom">
      <p>证件类型:身份证</p>
      <p>证件号码:{{ user.certificatesNo }}</p>
      <p>用户性别:{{ user.sex == 0 ? '女生' : '男士' }}</p>
      <p>出生日期：{{ user.birthdate }}</p>
      <p>手机号码：{{ user.phone }}</p>
      <p>婚姻状况:{{ user.isMarry == 0 ? '未婚' : '已婚' }}</p>
      <p>当前住址{{ user.param.cityString }}</p>
      <p>详细地址：{{ user.param.fullAddress }}</p>
      <div class="confirm" v-if="index === currentIndex">已选择</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
defineProps(['user', 'index', 'currentIndex'])
</script>

<style scoped lang="scss">
.visitor {
  box-shadow: 0px 0px 12px rgb(0, 0, 0, 0.1);
  .top {
    height: 60px;
    background-color: #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      display: flex;
      .free {
        height: 18px;
        width: 2.5em;
        line-height: 18px;
        text-align: center;
        font-size: 12px;
        background-color: white;
        margin-right: 10px;
      }
    }
  }
  .bottom {
    p {
      font-size: 14px;
      margin: 15px 0px;
      text-indent: 2.5em;
      letter-spacing: 1px;
    }
    .confirm {
      position: absolute;
      width: 200px;
      height: 200px;
      color: red;
      border-radius: 50%;
      border: 1px dashed red;
      text-align: center;
      line-height: 200px;
      top: 33%;
      left: 31%;
      opacity: 0.5;
      transform: rotate(35deg);
      font-weight: 900;
    }
  }
}
</style>
