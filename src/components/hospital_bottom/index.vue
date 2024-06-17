<template>
  <div class="bottom">
    <div class="content">
      <!-- 左边 -->
      <div class="left">京备325684004号 电话挂号153-7461-7645</div>
      <!-- 右边 -->
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私信息</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bottom {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: white;
  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #b1a9a9;
    .right {
      span {
        margin-left: 5px;
      }
    }
  }
}
</style>
