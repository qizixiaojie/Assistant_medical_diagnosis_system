<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul class="hospital">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'Level'
}
</script>

<style scoped lang="scss">
.level {
  color: #b1a9a9;
  h1 {
    margin: 10px 0px;
    font-weight: 900;
  }
  .content {
    display: flex;
    .left {
      margin-right: 10px;
    }
    .hospital {
      display: flex;
      li {
        margin-right: 10px;
        &.active {
          color: #1296db;
        }
      }
      li:hover {
        color: #1296db;
        cursor: pointer;
      }
    }
  }
}
</style>
