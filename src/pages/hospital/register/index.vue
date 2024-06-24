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
      <div class="left" v-if="hospitalStore.hospitalInfo.hospital?.logoData">
        <img :src="`data:image/jpeg;base64,${hospitalStore.hospitalInfo.hospital?.logoData}`" />
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
    <!-- 放置每一个医院的数据 -->
    <div class="deparment">
      <div class="leftNav">
        <ul>
          <li @click="changeIndex(index)" v-for="(deparment, index) in hospitalStore.deparmentArr" :key="deparment.depcode" :class="{ active: index == currentIndex, selected: index == currentIndex }">
            {{ deparment.depname }}
          </li>
        </ul>
      </div>
      <div class="deparmentInfo">
        <!-- 用一个div代表:大科室与小科室 -->
        <div class="showDeparment" v-for="deparment in hospitalStore.deparmentArr" :key="deparment.depcode">
          <h1 class="cur">{{ deparment.depname }}</h1>
          <!-- 每一个大的科室下小科室 -->
          <ul>
            <li @click="showLogin(item)" v-for="item in deparment.children" :key="item.depcode">
              {{ item.depname }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
//引入医院详情仓库的数据
import useDetailStore from '@/store/modules/hospitalDetail'
let hospitalStore = useDetailStore()

//控制科室高亮的响应式数据
let currentIndex = ref<number>(0)
//左侧大的科室点击的事件
const changeIndex = (index: number) => {
  currentIndex.value = index
  //点击导航获取右侧科室(大的科室H1标题)
  const allH1 = document.querySelectorAll('.cur')
  //滚动到对应科室的位置
  allH1[currentIndex.value].scrollIntoView({
    behavior: 'smooth', //过渡动画效果
    block: 'start' //滚动到位置 默认起始位置
  })
}
//点击科室按钮回调,跳转到预约挂号的详情页
//item用户选择的医院信息
const $router = useRouter()
const $route = useRoute()
const showLogin = (item: any) => {
  //点击某一个医院科室按钮，进入到相应的预约挂号详情页面
  $router.push({
     path: '/hospital/register_setupOne' ,
     query:{hoscode:$route.query.hoscode,depcode:$route.query.depcode}
    })
}
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
          content: '';
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
