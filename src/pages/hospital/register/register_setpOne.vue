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
        <div class="item" :class="{ active: item.status == -1 || item.availableNumber == -1, cur: item.workDate == workTime.workDate }" v-for="item in workData.bookingScheduleList" :key="item" @click="changeTime(item)">
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
      <el-pagination v-model:current-page="pageNo" layout=" prev, pager, next" :total="workData.total" @current-change="fetchWorkData" />
    </div>

    <!-- 展示医生的结构 -->
    <div class="bottom">
      <!-- 展示即将放号的时间 -->
      <div class="willing" v-if="workTime.status == 1">
        <p>2023.06.08</p>
        <span>放号</span>
      </div>
      <!-- <div class="stop" v-else-if="workTime.status == -1"></div> -->
      <div class="fill" v-else-if="workTime.status == -1">目前停止挂号,请选择其他时间进行预约</div>
      <!-- 展示医生上下午的结构  -->
      <div class="doctor" v-else>
        <div class="moring">
          <!-- 上部分的文字提示 -->
          <div class="tips">
            <img src="@/assets/images/hospital_上午.png" style="width: 24px" />
            <span>上午</span>
          </div>
          <!-- 展示每一个医生的信息 -->
          <div class="doctor_Info" v-for="doctor in moringArr" :key="doctor.id">
            <!-- 医生名字 -->
            <div class="left">
              <div class="info">
                <span>{{ doctor.title }}</span>
                <p class="line"></p>
                <span>{{ doctor.docname }}</span>
              </div>
              <div class="skill">{{ doctor.skill }}</div>
            </div>
            <!-- 右侧挂号钱数 -->
            <div class="right">
              <div class="money">￥{{ doctor.amount }}</div>
              <el-button @click="goStepTwo(doctor)" type="primary" size="default" style="width: 140px; height: 40px; font-weight: 700; font-size: 16px">{{ `剩余：` + doctor.availableNumber }}</el-button>
            </div>
          </div>
        </div>
        <div class="after">
          <div class="tips">
            <img src="@/assets/images/hospital_下午.png" style="width: 24px" />
            <span>下午</span>
          </div>
          <div class="doctor_Info" v-for="doctor in afterArr">
            <!-- 医生名字 -->
            <div class="left">
              <div class="info">
                <span>{{ doctor.title }}</span>
                <p class="line"></p>
                <span>{{ doctor.docname }}</span>
              </div>
              <div class="skill">{{ doctor.skill }}</div>
            </div>
            <!-- 右侧挂号钱数 -->
            <div class="right">
              <div class="money">￥{{ doctor.amount }}</div>
              <el-button @click="goStepTwo(doctor)" type="primary" size="default" style="width: 140px; height: 40px; font-weight: 700; font-size: 16px">{{ `剩余：` + doctor.availableNumber }}</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { reqHospitalWork, reqHospitalDoctor } from '@/api/hospital'
import { useRoute, useRouter } from 'vue-router'
import type { Doctor, DocArr, DoctorResponseData, HospitalWordData } from '@/api/hospital/type'
//获当前路由对象
const $route = useRoute()
const $router = useRouter()
//分页当前页面
const pageNo = ref<number>(1)
//每一条展示几条数据
const limit = ref<number>(6)

onMounted(() => {
  fetchWorkData()
})

//存储排班日期：当前数据的第一个
const workTime = ref<any>({})
//获取挂号数据
const workData = ref<any>({})
const fetchWorkData = async () => {
  const result: HospitalWordData = await reqHospitalWork(pageNo.value, limit.value, $route.query.hoscode as string, $route.query.depcode as string)
  if (result.code == 200) {
    workData.value = result.data
    //存储第一天日期的数据
    workTime.value = workData.value.bookingScheduleList[0]
    //获取一次医生的数据
    getDoctorWorkData()
  }
}
//获取某一天医生排班的数据
const docArr = ref<DocArr>([])
const getDoctorWorkData = async () => {
  const result: DoctorResponseData = await reqHospitalDoctor($route.query.hoscode as string, $route.query.depcode as string, workTime.value.workDate)
  if (result.code == 200) {
    docArr.value = result.data
  }
}

//点击顶部某一天触发回调函数
const changeTime = (item: any) => {
  // 存储用户选中那一天的数据
  workTime.value = item
  //再发一次请求
  getDoctorWorkData()
}

//计算出上午排班的医生数据
const moringArr = computed(() => {
  return docArr.value.filter((doc: Doctor) => {
    return doc.workTime == 0
  })
})
//计算出下午排班的医生数据
const afterArr = computed(() => {
  return docArr.value.filter((doc: Doctor) => {
    return doc.workTime == 1
  })
})
//跳转到选择就诊人的选项
const goStepTwo = (doctor: Doctor) => {
  //进行路由跳转，并且携带医生的ID
  $router.push({ path: '/hospital/register_setupTwo', query: { docId: doctor.id } })
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
        transition: all 0.3s;
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
        &.cur {
          transform: scale(1.1);
          font-weight: 700;
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
      align-items: center;
      justify-content: center;
      font-size: 28px;
      font-weight: 700;
      p {
        color: #1296db;
      }
    }
    .stop {
      font-size: 28px;
      margin-top: 40px;
      font-weight: 700;
      color: rgb(244, 185, 76);
      text-align: center;
    }
    .fill {
      font-size: 28px;
      margin-top: 40px;
      font-weight: 700;
      color: rgb(244, 185, 76);
      text-align: center;
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
