<template>
  <div class="top">
    <div class="content">
      <!-- 左侧 -->
      <div class="left">
        <img src="@/assets/images/log.png" alt="" />
        <p>柒子诊所 线上助诊平台</p>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登入/注册中心</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
      }
      p {
        font-size: 20px;
        color: #1296db;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #b1a9a9;
      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>
