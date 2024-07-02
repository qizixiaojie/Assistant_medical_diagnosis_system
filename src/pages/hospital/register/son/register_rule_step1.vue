<template>
  <div class="wrap" v-if="doctor">
    <!-- 顶部结构 -->
    <div class="top">
      <div class="hosname">{{ doctor.hosname }}</div>
      <div class="line"></div>
      <div>专科</div>
      <div class="hosdeparment">{{ doctor.sub_depname }}</div>
    </div>

    <!-- 中间日期的结构 -->
    <div class="center">
      <h1>{{ nowTime }}</h1>
      <div class="container">
        <div
          class="item"
          :class="{ active: item.state == 0 }"
          v-for="item in doctor.doctor_time"
          :key="item"
          @click="itemData(item)"
        >
          <div class="tops">
            {{ item.toDay }}
          </div>
          <div class="bottom">
            <div v-if="item.state == 0">没号了</div>
            <div v-if="item.state == 1">
              有号({{ item.afternoonCount + item.morningCount }})
            </div>
          </div>
        </div>
      </div>
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        layout=" prev, pager, next"
        :total="doctor.doctor_time.length"
      />
    </div>

    <!-- 展示医生的结构 -->
    <div class="bottom" v-if="itemNowData">
      <!-- 展示即将放号的时间 -->
      <div class="willing" v-if="itemNowData.state == 0">
        <p>每周一早上10点</p>
        <span>放号</span>
      </div>
      <!-- <div class="stop" v-else-if="workTime.status == -1"></div> -->
      <!-- <div class="fill" v-else-if="workTime.status == -1">目前停止挂号,请选择其他时间进行预约</div> -->
      <!-- 展示医生上下午的结构  -->
      <div class="doctor" v-else>
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
                <span>{{ doctor.doctor.position }}</span>
                <p class="line"></p>
                <span> {{ doctor.doctor.name }}</span>
              </div>
              <div class="skill">{{ doctor.sub_depname }}</div>
              <div class="skill">他/她：{{ doctor.doctor.introduce }}</div>
            </div>
            <!-- 右侧挂号钱数 -->
            <div class="right">
              <div class="money">￥ {{ doctor.doctor.money }}</div>
              <el-button
                type="primary"
                size="default"
                style="width: 140px; height: 40px; font-weight: 700; font-size: 16px"
                @click="goPay()"
              >
                {{ `剩余：` + itemNowData.morningCount }}
              </el-button>
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
                <span> {{ doctor.doctor.position }} </span>
                <p class="line"></p>
                <span> {{ doctor.doctor.name }}</span>
              </div>
              <div class="skill">{{ doctor.sub_depname }}</div>
              <div class="skill">他/她：{{ doctor.doctor.introduce }}</div>
            </div>
            <!-- 右侧挂号钱数 -->
            <div class="right">
              <div class="money">￥{{ doctor.doctor.money }}</div>
              <el-button
                type="primary"
                size="default"
                @click="goPay()"
                style="width: 140px; height: 40px; font-weight: 700; font-size: 16px"
              >
                {{ `剩余：` + itemNowData.afternoonCount }}</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospital_Doctor_Detail } from "@/api/hospital_import";
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

onMounted(() => {
  getDoctorDetails();
  getCurrentTime();
});
const $route = useRoute();
// 获取医院医生排班信息
// 全部医生数据
const doctor = ref();
const getDoctorDetails = async () => {
  const result: any = await reqHospital_Doctor_Detail($route.query);
  if (result.code == 200) {
    doctor.value = result.data;
    console.log(doctor.value);
  }
};

// 获取当前时间函数
const nowTime = ref("");
const getCurrentTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (nowTime.value = `${year}年${month}月${day}日`);
};
// 当前页码
const pageNo = ref(1);
const pageSize = ref(7); //每条页面展示多少条数据
const itemNowData = ref();
const itemData = (item: any) => {
  itemNowData.value = item;
  console.log(itemNowData.value);
};
//去往支付页面
//传递过去的数据
const $router = useRouter();
const dataPay = reactive({
  date: "",
  doctor: "",
  sub_depname: "",
  hosname: "",
  money: "",
});
const goPay = () => {
  // 需要一些数据
  dataPay.date = itemNowData.value.toDay;
  dataPay.doctor = doctor.value.doctor.name;
  dataPay.sub_depname = doctor.value.sub_depname;
  dataPay.hosname = doctor.value.hosname;
  // 获取在某一周就诊的钱
  dataPay.money = doctor.value.doctor.money;
  $router.push({ path: "/hospital/register_rule_step2", query: dataPay });
};
</script>

<script lang="ts">
export default {
  name: "register_step1",
};
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
      left: 403px;
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
