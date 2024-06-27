<template>
  <div>
    <!-- 展示订单详情的结构 -->
    <el-card class="box-card">
      <!-- 卡片头部的结构 -->
      <template #header>
        <div class="detail">挂号详情</div>
      </template>
      <!-- 展示身体部分顶部结构 -->
      <div class="top">
        <!-- 左侧标签 -->
        <el-tag class="ml-2" type="success">
          <div class="tag">
            <img src="@/assets/images/user_对.png" style="width: 20px" />
            <span>{{ orderInfo.param?.orderStatusString }}</span>
          </div>
        </el-tag>
        <div class="right_info">
          <img src="@/assets/images/医院的信息.png" alt="" />
          <div class="info">
            <p>微信 关注 “{{ orderInfo.hosname }}预约挂号”</p>
            <p>“快速预约挂号”</p>
          </div>
        </div>
      </div>
      <!-- 订单详情底部的结构 -->
      <div class="bottom">
        <div class="left">
          <!-- 左侧展示订单详情信息 -->
          <el-descriptions class="margin-top" :column="1" border>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">就诊人信息</div>
              </template>
              {{ orderInfo.patientName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">就诊日期</div>
              </template>
              {{ orderInfo.reserveDate }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">就诊医院</div>
              </template>
              {{ orderInfo.hosname }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">就诊科室</div>
              </template>
              {{ orderInfo.depname }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">医生职称</div>
              </template>
              {{ orderInfo.title }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">医事服务费</div>
              </template>
              <span style="color: red">{{ orderInfo.amount }}</span>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">挂号单号</div>
              </template>
              {{ orderInfo.outTradeNo }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">挂号时间</div>
              </template>
              {{ orderInfo.createTime }}
            </el-descriptions-item>
          </el-descriptions>
          <div class="btn">
            <el-popconfirm title="确定取消预约吗?">
              <template #reference>
                <el-button>取消预约</el-button>
              </template>
            </el-popconfirm>
            <el-button type="primary" size="default">支付</el-button>
          </div>
        </div>
        <div class="right">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>注意事项</span>
              </div>
            </template>
            <p>1.请确认就诊人信息是否准确，若填写错误将无法取号就诊，损失由本人承担；</p>
            <p style="color: red">2.【取号】就诊当天需在前 {{ orderInfo.fetchTime }}在医院取号，未取号视为爽约，该号不退不换；</p>
            <p>3.【退号】在{{ orderInfo.quitTime }}前可在线退号 ，逾期将不可办理退号退费；</p>
            <p>4.{{ orderInfo.hosname }}预约挂号支持自费患者使用身份证预约，同时支持北京市医保患者使用北京社保卡在平台预约挂号。请于就诊当日，携带预约挂号所使用的有效身份证件到院取号；</p>
            <p>5.请注意{{ orderInfo.hosname }}医保患者在住院期间不能使用社保卡在门诊取号。</p>
          </el-card>
        </div>
      </div>
    </el-card>
    <!-- 展示支付二维码的结构 -->
    <!-- 对话框通过v-model控制显示与隐藏的 true:展示 false隐藏 -->
    <el-dialog title="微信支付" width="400">
      <!-- 支付需要使用的二维码图片 -->
      <div class="qrocde">
        <p>请使用微信扫一扫</p>
        <p>扫描二维码支付</p>
      </div>
      <!-- 对话框底部插槽传递结构 -->
      <template #footer>
        <el-button type="primary" size="default">关闭窗口</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { reqOrderInfo } from '@/api/user'
import { useRoute } from 'vue-router'
import { OrderInfo, OrderResponseData } from '@/api/user/type'
//获取路由信息
let $route = useRoute()
//组件挂载完毕
onMounted(() => {
  getOrderInfo()
})

//控制对话框显示与隐藏的数据
const orderInfo = ref<OrderInfo>({} as OrderInfo)

//获取订单详情的数据
const getOrderInfo = async () => {
  let result: OrderResponseData = await reqOrderInfo($route.query.orderId as string)
  console.log(result.data)
  if (result.code == 200) {
    orderInfo.value = result.data
  }
}
</script>

<style scoped lang="scss">
.box-card {
  .detail {
    color: #7f7f7f;
    font-weight: 900;
  }
  .top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    .tag {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
    .right_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }
      .info {
        margin-left: 10px;
        p {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }

  .bottom {
    display: flex;
    margin-top: 20px;
    .left {
      flex: 4;
      .btn {
        margin: 10px 0px;
      }
    }
    .right {
      margin-left: 20px;
      flex: 6;
      p {
        line-height: 30px;
      }
    }
  }
}

::v-deep(.el-dialog__body) {
  border-top: 1px solid #7f7f7f;
  border-bottom: 1px solid #7f7f7f;
}

.qrocde {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    line-height: 30px;
  }
}
</style>
