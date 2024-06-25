<template>
  <div class="wrap">
    <!-- 顶部结构 -->
    <div class="top">
      <div class="hosname">{{ workData.baseMap?.hosname }}</div>
      <div class="line"></div>
      <div>专科</div>
      <div class="hosdeparment">{{ workData.baseMap?.depname }}</div>
    </div>

    <!-- 中间日期的结构 -->
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

    <!-- 展示医生的结构 -->
    <div class="bottom">
      <!-- 展示即将放号的时间 -->
      <div class="willing" v-show="false">
        <p>2023.06.08</p>
        <span>放号</span>
      </div>
      <!-- 展示医生上下午的结构  -->
      <div class="doctor">
        <div class="moring">
          <!-- 上部分的文字提示 -->
          <div class="tips">
            <img src="@/assets/images/hospital_上午.png" style="width: 24px" />
            <span>上午</span>
          </div>
          <!-- 展示每一个医生的信息 -->
          <div class="doctor_Info">
            <!-- 医生名字 -->
            <div class="left">
              <div class="info">
                <span>副主任医生</span>
                <p class="line"></p>
                <span>柒子小姐</span>
              </div>
              <div class="skill">骨质疏松和骨代谢疾病、糖尿病、甲状腺疾病。</div>
            </div>
            <!-- 右侧挂号钱数 -->
            <div class="right">
              <div class="money">￥100</div>
              <el-button type="primary" size="50" style="width: 140px; height: 40px; font-weight: 700; font-size: 16px">100</el-button>
            </div>
          </div>
        </div>
        <div class="after">
          <div class="tips">
            <img src="@/assets/images/hospital_下午.png" style="width: 24px" />
            <span>下午</span>
          </div>
          <div class="doctor_Info">
            <!-- 医生名字 -->
            <div class="left">
              <div class="info">
                <span>副主任医生</span>
                <p class="line"></p>
                <span>柒子小姐</span>
              </div>
              <div class="skill">骨质疏松和骨代谢疾病、糖尿病、甲状腺疾病。</div>
            </div>
            <!-- 右侧挂号钱数 -->
            <div class="right">
              <div class="money">￥100</div>
              <el-button type="primary" size="50" style="width: 140px; height: 40px; font-weight: 700; font-size: 16px">100</el-button>
            </div>
          </div>
        </div>
      </div>
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
    margin: 100px 0px 20px 0px;
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
        cursor: pointer;
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
  .bottom {
    font-size: 14px;
    .willing {
      display: flex;
      justify-content: center;
      font-size: 28px;
      font-weight: 700;
      p {
        color: #1296db;
      }
    }
    .doctor {
      .moring {
        .tips {
          display: flex;
          align-items: center;
          span {
            color: #b1a9a9;
            margin: 0px 10px;
            font-size: 14px;
          }
        }
        .doctor_Info {
          display: flex;
          justify-content: space-between;
          margin: 5px 0px;
          border-bottom: 1px solid #b1a9a9;
          .left {
            .info {
              display: flex;
              align-items: center;
              margin: 20px 0px;
              font-size: 18px;
              color: #1296db;
              .line {
                width: 1.5px;
                height: 14px;
                margin: 0px 10px;
                background-color: #1296db;
              }
            }
            .skill {
              color: #b1a9a9;
              margin-bottom: 10px;
            }
          }
          .right {
            display: flex;
            align-items: center;
            .money {
              color: #1296db;
              font-weight: 700;
              font-size: 16px;
              margin-right: 20px;
            }
          }
        }
      }
      .after {
        margin-top: 50px;
        .tips {
          display: flex;
          align-items: center;
          span {
            color: #b1a9a9;
            margin: 0px 10px;
            font-size: 14px;
          }
        }
        .doctor_Info {
          display: flex;
          justify-content: space-between;
          margin: 5px 0px;
          border-bottom: 1px solid #b1a9a9;
          .left {
            .info {
              display: flex;
              align-items: center;
              margin: 20px 0px;
              font-size: 18px;
              color: #1296db;
              .line {
                width: 1.5px;
                height: 14px;
                margin: 0px 10px;
                background-color: #1296db;
              }
            }
            .skill {
              color: #b1a9a9;
              margin-bottom: 10px;
            }
          }
          .right {
            display: flex;
            align-items: center;
            .money {
              color: #1296db;
              font-weight: 700;
              font-size: 16px;
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
