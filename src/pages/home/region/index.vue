<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        这是地区抓紧
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<script lang="ts">
export default {
  name: 'Region'
}
</script>

<style scoped lang="scss">
.region {
  color: #b1a9a9;
  margin-top: 10px;
  .content {
    cursor: pointer;
    display: flex;
    .left {
      // margin-right: 8px;
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
