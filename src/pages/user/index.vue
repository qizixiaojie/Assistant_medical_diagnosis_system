<template>
  <div class="main">
    <el-card
      style="min-width: 300px; margin-bottom: 30px"
      v-for="item in orderData"
      :key="item.user_orderID"
      v-if="orderData"
    >
      <template #header>
        <div class="card-header">
          <span>姓名：{{ item.Realname }}</span>
        </div>
      </template>
      <div class="data-List">
        <li>实际就诊人：{{ item.Realname }}</li>
        <li>
          实际花费：<span style="background-color: #1295db8b">{{ item.money }}￥</span>
        </li>
        <li>手机号码：{{ item.phone }}</li>
        <li>身份证号：{{ item.IDcard }}</li>
        <li>就诊医院：{{ item.hosname }}</li>
        <li>就诊部门：{{ item.sub_depname }}</li>
        <li>主治医师：{{ item.doctor }}</li>
      </div>
      <template #footer>
        <el-button type="primary" @click="cancel(item)">取消预约</el-button>
      </template>
    </el-card>
    <div v-if="isShow">
      <div
        v-if="username"
        style="color: rgb(182, 57, 57); font-size: 30px; font-weight: 700"
      >
        <h1>暂无{{ username }}就诊信息</h1>
        <el-empty description="暂无信息 "></el-empty>
      </div>
    </div>
  </div>

  <!-- 弹窗 -->
  <el-dialog v-model="dialogVisible" title="Tips" width="500">
    <span>您确认要取消嘛？</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">放回</el-button>
        <el-button @click="cancelServe()"> 确定取消 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reqCancelOrder, reqUserGetOrder } from "@/api/user";
import useUserStore from "@/store/modules/interface/user";
import { onMounted, ref } from "vue";

onMounted(() => {
  getData();
});
//获取预约订单信息
const orderData = ref(); //预约信息
const dialogVisible = ref(false); //是否弹出表单
const username = ref(""); //登录用户
const isShow = ref(false); //是否展处没有消息
const getData = async () => {
  const userStore = useUserStore();
  username.value = userStore.userInfo.userName;
  const result: any = await reqUserGetOrder(userStore.userInfo.userName);
  orderData.value = result;
  console.log(orderData.value.length);
  if (orderData.value.length == 0) {
    isShow.value = true;
  }
};

//弹出弹窗是否取消预约
const user_orderID = ref("");
const cancel = (item: any) => {
  dialogVisible.value = true;
  user_orderID.value = item.user_orderID;
};
const cancelServe = () => {
  dialogVisible.value = false;
  reqCancelOrder(parseInt(user_orderID.value));
  getData();
  setTimeout(() => {
    location.reload();
  }, 1500);
};
</script>

<style scoped lang="scss">
.main {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .data-List {
    list-style-type: none;
    li {
      height: 30px;
      line-height: 30px;
      margin-top: 5px;
      text-indent: 2em;
      border-radius: 5px;
      background-color: #eeeeee98;
    }
  }
}
</style>
