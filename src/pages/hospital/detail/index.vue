<template>
  <div class="detail">
    <!-- 医院名字与医院等级的结构 -->
    <div class="top">
      <div class="name">{{ hospitalStore.hospitalInfo.hospital?.hosname }}</div>
      <div class="level">
        <img src="@/assets/images/hospital_点赞赞.png" style="width: 20px" />&nbsp;
        <span>{{ hospitalStore.hospitalInfo.hospital?.param.hostypeString }}</span>
      </div>
    </div>
    <!-- 医院的logo和路线 -->
    <div class="logo">
      <div class="left">
        <img :src="`data:image/jpeg;base64,` + hospitalStore.hospitalInfo.hospital?.logoData" />
      </div>
      <div class="right">
        <div class="address">
          <img src="@/assets/images/hospital_导航.png" style="width: 16px; margin-right: 10px" />
          <span style="font-size: 14px"><span style="color: black">具体的位置：</span>{{ hospitalStore.hospitalInfo.hospital?.param.fullAddress }}</span>
        </div>
        <div class="route">规划路线：{{ hospitalStore.hospitalInfo.hospital?.route }}</div>
      </div>
    </div>
    <!-- 医院的介绍 -->
    <div class="footer">
      <h1>医院介绍</h1>
      <p>{{ hospitalStore.hospitalInfo.hospital?.intro }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
//获取医院详情仓库数据进行展示
import useDetailStore from '@/store/modules/hospitalDetail'
const hospitalStore = useDetailStore()
</script>

<style scoped lang="scss">
.detail {
  .top {
    display: flex;
    .name {
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
  .logo {
    display: flex;
    margin: 10px 0px;
    .left {
      height: 100px;
      width: 100px;
      margin-right: 50px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
    .right {
      flex: 1;
      margin-left: 10px;
      color: #b1a9a9;
      div {
        margin: 20px 0px;
      }
      .route {
        font-size: 14px;
      }
    }
  }
  .footer {
    color: #b1a9a9;
    p {
      margin: 20px 0px;
      line-height: 30px;
      text-indent: 2em;
      font-size: 12px;
    }
    h1 {
      letter-spacing: 1px;
      font-weight: 700;
      color: #333;
      font-size: 16px;
    }
  }
}
</style>
