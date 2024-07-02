<template>
  <div class="register">
    <div class="top">
      <div class="title">
        {{ hospitalStore.hospitalInfo.hosname }}
      </div>
      <div class="level">
        <img src="@/assets/images/hospital_点赞赞.png" style="width: 20px" />&nbsp;
        <span>{{
          hospitalStore.hospitalInfo.hostype == "1"
            ? "三级甲等"
            : hospitalStore.hospitalInfo.hostype == "2"
            ? "二级乙等"
            : hospitalStore.hospitalInfo.hostype == "3"
            ? "一级丁等"
            : "未知等级"
        }}</span>
      </div>
    </div>
    <!-- 展示内容区域 -->
    <div class="content">
      <div class="left" v-if="hospitalStore.hospitalInfo?.logoData">
        <img :src="`data:image/jpeg;base64,${hospitalStore.hospitalInfo.logoData}`" />
      </div>
      <div class="right">
        <div class="rule">挂号规则</div>
        <div class="time">
          <span><span>预约周期：</span>10天</span>
          <span
            ><span>放号时间：</span
            >{{ hospitalStore.hospitalInfo.daily_release_time }}</span
          >
          <span><span>停挂时间：</span>{{ hospitalStore.hospitalInfo.stopOrder }}</span>
        </div>
        <div class="address">
          <span><span>具体地址：</span>{{ hospitalStore.hospitalInfo.address }}</span>
          <span
            ><span>退号时间：</span>就诊前一工作日{{
              hospitalStore.hospitalInfo.quitTime
            }}前取消</span
          >
        </div>
        <div class="route">
          <span><span>具体路线：</span>{{ hospitalStore.hospitalInfo.route }}</span>
        </div>
        <div class="rule" style="margin-top: 20px">医院预约规则</div>
        <div class="ruleInfo" v-for="(item, index) in orderRule" :key="index">
          <span style="font-size: 12px; color: #b1a9a9">{{ index + 1 }}. {{ item }}</span>
        </div>
      </div>
    </div>
    <!-- 放置每一个医院的数据 -->
    <div class="deparment">
      <div class="leftNav">
        <ul>
          <li
            v-for="(deparment, index) in hospitalStore.hospitalInfo.departmentsArr"
            :key="deparment.depcode"
            @click="changeIndex(index)"
            :class="{ active: index == currentIndex, selected: index == currentIndex }"
          >
            {{ deparment.depname }}
          </li>
        </ul>
      </div>
      <div class="deparmentInfo">
        <!-- 用一个div代表:大科室与小科室 -->
        <div
          class="showDeparment"
          v-for="deparment in hospitalStore.hospitalInfo.departmentsArr"
          :key="deparment.depcode"
        >
          <h1 class="cur">{{ deparment.depname }}</h1>
          <!-- 每一个大的科室下小科室 -->
          <ul>
            <li
              @click="login(item)"
              v-for="item in deparment.children"
              :key="item.sub_depcode"
            >
              {{ item.sub_depname }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入医院详情仓库的数据
import useDetailStore from "@/store/modules/hospital_Datail.ts";
import { onMounted, ref } from "vue";
//获取user仓库下面的数据visable，可以控制Login组件的对话框
import useUserStore from "@/store/modules/interface/user";
//导入路由
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const userStore = useUserStore();
const hospitalStore = useDetailStore();
const orderRule = ref([]);
//获当前路由对象
const $route = useRoute();
const $router = useRouter();

onMounted(() => {
  getOrderRule();
});
// 对预约规则进行拆解
const getOrderRule = () => {
  const Rule = hospitalStore.hospitalInfo.orderRule;
  if (Rule) {
    const splitRoutes = Rule.split(".");
    orderRule.value = splitRoutes;
  }
};

//控制科室高亮的响应式数据
let currentIndex = ref<number>(0);
//左侧大的科室点击的事件
const changeIndex = (index: number) => {
  currentIndex.value = index;
  //点击导航获取右侧科室(大的科室H1标题)
  const allH1 = document.querySelectorAll(".cur");
  //滚动到对应科室的位置
  allH1[currentIndex.value].scrollIntoView({
    behavior: "smooth", //过渡动画效果
    block: "start", //滚动到位置 默认起始位置
  });
};
//点击登录与注册按钮的时候弹出对话框
const login = (item: any) => {
  console.log(item);
  if (userStore.userInfo.userName) {
    $router.push({
      path: "/hospital/register_rule_step1",
      query: { hoscode: $route.query.hoscode, sub_depcode: item.sub_depcode },
    });
  } else {
    ElMessage({
      message: "您未登录",
      type: "error",
    });
    userStore.visiable = true;
  }
};
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
      cursor: pointer;
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
        width: 840px;
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
  .deparment {
    width: 100%;
    height: 500px;
    display: flex;
    margin-top: 40px;
    overflow: auto;
    cursor: pointer;
    .leftNav {
      width: 140px;
      height: 100%;
      ul {
        width: 100%;
        background: rgb(248, 248, 248);
        display: flex;
        flex-direction: column;
        li {
          flex: 1;
          text-align: center;
          color: #7f7f7f;

          line-height: 41.6px;
          font-size: 14px;
          font-weight: 700;
          background: #f4f9ff;
          &.active {
            border-left: 1px solid red;
            color: red;
            background: white;
          }
          &.selected {
            font-size: 16px;
            color: black;
          }
        }
      }
    }
    .deparmentInfo {
      flex: 1;
      margin-left: 20px;
      height: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .showDeparment {
        h1 {
          display: flex;
          align-items: center;
          font-weight: 600;
          color: black;
        }
        h1::before {
          content: "";
          width: 3px;
          height: 15px;
          background-color: blue;
          border-radius: 30%;
          display: inline-block;
          margin-right: 10px;
          margin-left: 5px;
        }
        ul {
          margin-top: 20px;
          margin-bottom: 30px;
          display: flex;
          flex-wrap: wrap;
          margin-left: 5px;
          li {
            font-size: 14px;
            color: #7f7f7f;
            width: 33%;
            line-height: 30px;
            margin: 2px 0px;
          }
        }
      }
    }
  }
}
</style>
