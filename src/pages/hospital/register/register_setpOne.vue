<template>
  <div class="wrap">
    <div class="top">
      <div class="hosname">{{ workData.baseMap?.hosname }}</div>
      <div class="line"></div>
      <div>专科</div>
      <div class="hosdeparment">{{ workData.baseMap?.depname }}</div>
    </div>
    <div class="center">
      <h1>{{ workData.baseMap?.workDateString }}</h1>
      <div class="container">
        <div class="item" :class="{ active: item.status == -1 || item.availableNumber == -1 }" v-for="item in workData.bookingScheduleList" :key="item">
          <div class="tops">
            {{ item.workDate }}
            <h1>{{ item.dayOfWeek }}</h1>
          </div>
          <div class="bottom">
            <div v-if="item.status == -1">停止挂号</div>
            <div v-if="item.status == 0">
              {{ item.availableNumber == -1 ? '约满了' : `有号&nbsp;(${item.availableNumber})` }}
            </div>
            <div v-if="item.status == 1">即将放号</div>
          </div>
        </div>
      </div>
      <el-pagination v-model:current-page="pageNo" layout="prev,pager,next" :total="workData.total" @current-change="fetchWorkData"></el-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqHospitalWork } from '@/api/hospital'
import { useRoute } from 'vue-router'
import type { HospitalWordData } from '@/api/hospital/type'
//获当前路由对象
const $route = useRoute()
//分页当前页面
const pageNo = ref<number>(1)
//每一条展示几条数据
const limit = ref<number>(6)

onMounted(() => {
  fetchWorkData()
})

//获取挂号数据
const workData = ref<any>({})
const fetchWorkData = async () => {
  const result: HospitalWordData = await reqHospitalWork(pageNo.value, limit.value, $route.query.hoscode as string, $route.query.depcode as string)
  if (result.code == 200) {
    workData.value = result.data
  }
}
</script>

<style scoped lang="scss">
.wrap {
  .top {
    margin-top: 20px;
    display: flex;
    color: #b1a9a9;
    letter-spacing: 2px;
    .line {
      width: 0.2px;
      height: 14px;
      margin: 4px 10px 4px 10px;
      background-color: #1296db;
    }
    .hosdeparment {
      top: 160px;
      left: 402px;
      color: black;
      font-size: 18px;
      font-weight: 600;
      position: absolute;
    }
  }
  .center {
    margin: 150px 0px 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 16px;
    }
    .container {
      display: flex;
      width: 100%;
      margin: 35px 0px;
      .item {
        flex: 1;
        border: 1px solid #1296db;
        margin: 0px 5px;
        text-align: center;
        border-radius: 5px;
        &.active {
          border: 1px solid #b1a9a9;
          background-color: #eee;
          color: #b1a9a9;
          .tops {
            background-color: #eee;
            color: #b1a9a9;
          }
          .bottom {
            background-color: white;
            color: #b1a9a9;
            border-radius: 5px;
          }
        }
        .tops {
          display: flex;
          border-radius: 5px;
          justify-content: center;
          background-color: #e8f2ff;
          margin-top: 0px;
          font-size: 14px;
          color: #1296db;
          padding: 10px 0px;
          h1 {
            font-size: 12px;
            margin-top: 2px;
            margin-left: 10px;
          }
        }
        .bottom {
          letter-spacing: 1px;
          height: 60px;
          line-height: 60px;
          color: #1296db;
        }
        // // 选择中
        // .Active {
        //   background-color: #1296db;
        //   color: white;
        //   font-weight: 700;
        // }
        // .ActiveBot {
        //   margin: 10px 0px;
        //   font-weight: 700;
        //   color: #1296db;
        // }
        // // 普通无号
        // .Null {
        //   background-color: #eee;
        //   color: #b1a9a9;
        // }
        // .NullBot {
        //   margin: 10px 0px;
        //   color: #b1a9a9;
        // }
        // // 选择无号
        // .NullActive {
        //   color: white;
        //   font-weight: 700;
        //   background-color: #b1a9a9;
        // }
        // .NullActiveBot {
        //   margin: 10px 0px;
        //   color: #b1a9a9;
        //   font-weight: 700;
        // }
      }
    }
  }
}
</style>
