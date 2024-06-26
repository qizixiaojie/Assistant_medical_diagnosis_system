<template>
  <div class="container">
    <h1 class="tip">确认挂号信息</h1>
    <!-- 卡片展示就诊人信息 -->
    <el-card class="box-card">
      <!-- 卡片头部 -->
      <template #header>
        <div class="card-header">
          <span>请选择就诊人</span>
          <el-button type="primary" size="default" :icon="User">添加就诊人</el-button>
        </div>
      </template>
      <!-- 卡片的身体信息 -->
      <div class="user">
<<<<<<< HEAD
        <Visitor @click="changeIndex(index)" v-for="(user, index) in userArr" :key="User.id" class="item" :user="user" :index="index" :currentIndex="index" />
=======
        <Visitor v-for="user in userArr" :key="User.id" class="item"  :user="user"/>
>>>>>>> 40d8c63a1a18711e3af526cf2e50314f26b80c31
      </div>
    </el-card>

    <!-- 卡片：展示医生的信息 -->
    <el-card class="box-card box-card-doctor">
      <!-- 卡片头部 -->
      <template #header>
        <div class="card-header">
          <span>挂号信息</span>
          <el-button type="primary" size="default">添加就诊人</el-button>
        </div>
      </template>
      <!-- 卡片的身体部分 -->
      <el-descriptions class="margin-top" :column="2" border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊日期：</div>
          </template>
          {{ docInfo.workDate }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊医院：</div>
          </template>
          {{ docInfo.param?.hosname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">就诊科室：</div>
          </template>
          {{ docInfo.param?.depname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生名字：</div>
          </template>
          {{ docInfo.docname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生职称：</div>
          </template>
          {{ docInfo.title }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医生专长：</div>
          </template>
          {{ docInfo.skill }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">医事服务器：</div>
          </template>
          {{ docInfo.amount }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>

    <!-- 确定挂号 -->
    <div class="btn">
      <!-- <el-button class="determine" type="primary" size="default" :disabled="currentIndex == -1 ? true : false"> 确认挂号</el-button> -->
      <el-button class="determine" type="primary" size="default" :disabled="false"> 确认挂号</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from '@element-plus/icons-vue'
// 就诊人信息
import Visitor from './visitor.vue'
//引入就诊人信息接口
import { reqGetUser, reqDoctorInfo } from '@/api/hospital'
import { onMounted, ref } from 'vue'
import { UserResponseData, UserArr, DoctorInfoData } from '@/api/hospital/type'
import { useRoute } from 'vue-router'
onMounted(() => {
  fetchUserData()
  fetchInfo()
})

//存储就诊人信息
const userArr = ref<UserArr>([])
//获取当前路由
const $route = useRoute()
//存储医生信息
const docInfo = ref<any>({})
//存储用户确定就诊人索引值
let currentIndex = ref<number>(-1)

//获取就诊人信息
const fetchUserData = async () => {
  //获取就诊人的信息，之前账号就是已经有了四个就诊人
  //但是如果是新的账号，就要先注册几个账号

  const result: UserResponseData = await reqGetUser()
  if (result.code == 200) {
    console.log('由于一直获取不到就诊人的信息，所以我直接打开就诊人的按钮' + result.data)
    userArr.value = result.data
  }
}
//获取医生的信息
const fetchInfo = async () => {
  let result: DoctorInfoData = await reqDoctorInfo($route.query.docId as string)
  if (result.code == 200) {
    docInfo.value = result.data
  }
}
//点击就诊人子组件的的回调
const changeIndex = (index: number) => {
  //存储当前用户选中就诊人信息索引值
  currentIndex.value = index
}
</script>

<style scoped lang="scss">
.container {
  .tip {
    font-weight: 700;
    color: #b1a9a9;
    font-size: 20px;
  }
  .box-card {
    margin-top: 20px;
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .user {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 32%;
        margin: 5px;
      }
    }
  }
  .box-card-doctor {
    box-shadow: 0px 0px 12px rgb(0, 0, 0, 0.1);
  }
  .btn {
    display: flex;
    justify-content: center;
    .determine {
      width: 140px;
      height: 40px;
      font-weight: 700;
      font-size: 16px;
      margin: 20px 0px;
    }
  }
}
</style>
