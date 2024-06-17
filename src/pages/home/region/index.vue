<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li class="active">全部</li>
        <li v-for="item in 20" :key="item">柒子区</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.region {
  color: #b1a9a9;
  margin-top: 10px;
  .content {
    display: flex;
    .left {
      margin-right: 10px;
      width: 62px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
        &.active {
          color: #1296db;
        }
      }
      li:hover {
        color: #1296db;
      }
    }
  }
}
</style>
