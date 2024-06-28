<template>
  <el-card class="box-card" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="hospital_name">医院名字</div>
        <div class="tip">
          <div class="level">
            <img src="@/assets/images/home_赞.png" style="width: 16px" />
            <span>三级甲等</span>
          </div>
          <div class="time">
            <img src="@/assets/images/home_闹钟.png" style="width: 16px" />
            <span>每天10点放号</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/images/home_云平台.png" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;
  .right {
    img {
      height: 50px;
      width: 50px;
    }
  }
  .left {
    width: 60%;
    .tip {
      color: #b1a9a9;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .level {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
      .time {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
