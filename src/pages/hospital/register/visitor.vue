<template>
  <div class="visitor">
    <div class="top">
      <div class="left">
        <div class="free">医保</div>
        <span class="username">柒子小姐</span>
      </div>
      <div class="right">
        <el-button circle type="primary" size="default" :icon="Edit"></el-button>
      </div>
    </div>
    <div class="bottom">
      <p>证件类型：身份证</p>
      <p>证件类型：身份证</p>
      <p>证件类型：身份证</p>
      <p>证件类型：身份证</p>
      <p>证件类型：身份证</p>
      <p>证件类型：身份证</p>
      <p>证件类型：身份证</p>
      <p>证件类型：身份证</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
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
      margin: 15px 0px;
      text-indent: 2em;
      letter-spacing: 1px;
    }
  }
}
</style>
