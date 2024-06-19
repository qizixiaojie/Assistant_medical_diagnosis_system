<template>
  <div class="register">
    <div class="top">
      <div class="title">
        {{ hospitalStore.hospitalInfo.hospital?.hosname }}
      </div>
      <div class="level">
        <img src="@/assets/images/hospital_点赞赞.png" style="width: 20px" />&nbsp;
        <span>{{ hospitalStore.hospitalInfo.hospital?.param.hostypeString }}</span>
      </div>
    </div>
    <!-- 展示内容区域 -->
    <div class="content">
      <div class="left">
        <img :src="`data:image/jpeg;base64,` + hospitalStore.hospitalInfo.hospital?.logoData" alt="" />
      </div>
      <div class="right">
        <div class="rule">挂号规则</div>
        <div class="time">
          <span><span>预约周期：</span>10天</span> <span><span>放号时间：</span>{{ hospitalStore.hospitalInfo.bookingRule?.releaseTime }}</span> <span><span>停挂时间：</span>{{ hospitalStore.hospitalInfo.bookingRule?.stopTime }}</span>
        </div>
        <div class="address">
          <span><span>具体地址：</span>{{ hospitalStore.hospitalInfo.hospital?.param.fullAddress }}</span>
          <span><span>退号时间：</span>就诊前一工作日{{ hospitalStore.hospitalInfo.bookingRule?.quitTime }}前取消</span>
        </div>
        <div class="route">
          <span><span>具体路线：</span>{{ hospitalStore.hospitalInfo.hospital?.route }}</span>
        </div>
        <div class="rule" style="margin-top: 20px">医院预约规则</div>
        <div class="ruleInfo" v-for="(item, index) in hospitalStore.hospitalInfo.bookingRule?.rule" :key="index">
          <span style="font-size: 12px; color: #b1a9a9">{{ index + 1 }}. {{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入医院详情仓库的数据
import useDetailStore from '@/store/modules/hospitalDetail'
const hospitalStore = useDetailStore()
</script>

<style scoped lang="scss">
.register {
  .top {
    display: flex;
    .title {
      color: #333;
      font-size: 24px;
      font-weight: 700;
      margin-right: 15px;
    }
    .level {
      display: flex;
      align-items: center;
      color: #b1a9a9;
      font-size: 14px;
    }
  }
  .content {
    display: flex;
    margin-top: 20px;
    .left {
      width: 100px;
      img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
      }
    }
    .right {
      flex: 1;
      margin-left: 20px;
      .rule {
        margin-top: 10px;
      }
      .time,
      .address,
      .route,
      .ruleInfo {
        margin-top: 8px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        width: 890px;
        span {
          span {
            color: #b1a9a9;
          }
        }
      }
      .route {
        color: #b1a9a9;
      }
      .ruleInfo {
        margin-top: 10px;
      }
    }
  }
}
</style>
