<template>
  <el-card class="box-card" shadow="hover" @click="goDetail">
    <div class="content">
      <div class="left">
        <div class="hospital_name">{{ hospitalCarData.hosname }}</div>
        <div class="tip">
          <div class="level">
            <img src="@/assets/images/home_赞.png" style="width: 16px" />
            <span>{{ hospitalCarData.hostype == '1' ? '三级甲等' : hospitalCarData.hostype == '2' ? '二级乙等' : hospitalCarData.hostype == '3' ? '一级丁等' : '未知等级' }}</span>
          </div>
          <div class="time">
            <img src="@/assets/images/home_闹钟.png" style="width: 16px" />
            <span>每天{{ hospitalCarData.daily_release_time }}放号</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img :src="`data:image/jpeg;base64,${hospitalCarData.logoData}`" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

//接受父亲传递过来的数据
const props = defineProps(['hospitalCarData'])
//进行路由跳转到详情页面
const $router = useRouter()

const goDetail = () => {
  console.log()

  $router.push({
    path: '/hospital/register',
    query: { hoscode: props.hospitalCarData.hoscode }
  })
}
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
    width: 70%;
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
