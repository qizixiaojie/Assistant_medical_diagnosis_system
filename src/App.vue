<template>
  <div class="container">
    <!-- 顶部组件 -->
    <Hospital_top />
    <div class="content">21111</div>
    <div class="bottom">app</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
    background-color: azure;
  }
  .bottom {
    width: 100%;
    height: 50px;
    background-color: bisque;
  }
}
</style>
