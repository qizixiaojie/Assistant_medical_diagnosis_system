<template>
  <el-card class="box-card" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="hospital_name">{{ hospitalInfo.hosname }}</div>
        <div class="tip">
          <div class="level">
            <img src="@/assets/images/赞.png" style="width: 16px" />
            <span>{{ hospitalInfo.param.hostypeString }}</span>
          </div>
          <div class="time">
            <img src="@/assets/images/闹钟.png" style="width: 16px" />
            <span>每天{{ hospitalInfo.bookingRule?.releaseTime }}放号</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
//接受父组件传过来的props-》已有的医院数据
defineProps(['hospitalInfo'])
</script>

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
