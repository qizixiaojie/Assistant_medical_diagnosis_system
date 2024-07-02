<template>
  <div class="Main_content">
    <el-card style="min-width: 600px">
      <template #header> 就诊支付 </template>
      <div class="cotent">
        <div
          class="right"
          v-if="dataPay"
          :label-position="labelPosition"
          label-width="auto"
        >
          <el-form :model="pushData" :rules="pushDataRules" class="from" ref="form">
            <el-form-item label="约号姓名:" prop="username">
              <el-input v-model="pushData.username" disabled />
            </el-form-item>
            <el-form-item label="实际就诊人:" prop="Realname">
              <el-input v-model="pushData.Realname" />
            </el-form-item>
            <el-form-item label="手机号码:" prop="phone">
              <el-input v-model="pushData.phone" />
            </el-form-item>
            <el-form-item label="就诊时间:" prop="date">
              <el-input v-model="pushData.date" disabled />
            </el-form-item>
            <el-form-item label="身份证信息:" prop="IDcard">
              <el-input v-model="pushData.IDcard" />
            </el-form-item>
            <el-form-item label="需要支付的金额:" prop="money">
              <el-input v-model="pushData.money" disabled />
            </el-form-item>
            <el-form-item label="是否支付:" prop="isPay">
              <el-input v-model="pushData.isPay" disabled />
            </el-form-item>
            <el-form-item label="医院名字:" prop="hosname">
              <el-input v-model="pushData.hosname" disabled />
            </el-form-item>
            <el-form-item label="就诊部门:" prop="sub_depname">
              <el-input v-model="pushData.sub_depname" disabled />
            </el-form-item>
            <el-form-item label="医生:" prop="doctor">
              <el-input v-model="pushData.doctor" disabled />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="buttom">
        <el-button type="primary" @click="truePay(form)">确定支付</el-button>
      </div>
    </el-card>

    <!-- 制作弹窗 -->
    <el-dialog v-model="dialogVisible" title="二维码支付" width="500">
      <div style="text-align: center">
        <img src="@/assets/images/code_app.png" style="width: 120px; height: 120px" />
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="paySucess">支付成功</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reqUserOrder } from "@/api/user";
import useUserStore from "@/store/modules/interface/user";
import { ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const userStore = useUserStore();
onMounted(() => {
  getPaydata();
});
//表单的位置
const labelPosition = ref("left");
//获取表单实例
const form = ref();
// 是否弹出对话框
const dialogVisible = ref(false);
//获取用户账户信息
const $route = useRoute();
const $router = useRouter();
const dataPay = ref(); //支付信息
const pushData = reactive({
  //推送信息
  username: "",
  Realname: "",
  IDcard: "",
  phone: "",
  money: "",
  isPay: "否",
  doctor: "",
  date: "",
  hosname: "",
  sub_depname: "",
});

const getPaydata = () => {
  dataPay.value = $route.query;
  pushData.date = dataPay.value.date;
  pushData.doctor = dataPay.value.doctor;
  pushData.money = dataPay.value.money;
  pushData.hosname = dataPay.value.hosname;
  pushData.sub_depname = dataPay.value.sub_depname;
  pushData.username = userStore.userInfo.userName;
  console.log(pushData);
};
const pushDataRules = reactive({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 20, message: "用户名长度应为3-20个字符", trigger: "blur" },
  ],
  Realname: [
    { required: true, message: "请输入真实姓名", trigger: "blur" },
    { min: 2, max: 20, message: "真实姓名长度应为2-20个字符", trigger: "blur" },
  ],
  IDcard: [
    { required: true, message: "请输入身份证号码", trigger: "blur" },
    {
      pattern: /^\d{17}[\dXx]$/,
      message: "请输入有效的 18 位身份证号码",
      trigger: "blur",
    },
  ],
  phone: [
    { required: true, message: "请输入手机号码", trigger: "blur" },
    { pattern: /^1[3-9]\d{9}$/, message: "请输入有效的手机号码", trigger: "blur" },
  ],
  money: [
    { required: true, message: "请输入金额", trigger: "blur" },
    { pattern: /^\d+(\.\d{1,2})?$/, message: "请输入有效的金额", trigger: "blur" },
  ],
  isPay: [{ required: true, message: "请选择是否支付", trigger: "change" }],
  doctor: [
    { required: true, message: "请输入医生姓名", trigger: "blur" },
    { min: 1, max: 50, message: "医生姓名长度应为3-50个字符", trigger: "blur" },
  ],
  date: [
    { required: true, message: "请输入日期", trigger: "blur" },
    {
      min: 1,
      max: 50,
      message: "请输入有效的日期（YYYY-MM-DD 格式）",
      trigger: "blur",
    },
  ],
  hosname: [
    { required: true, message: "请输入医院名称", trigger: "blur" },
    { min: 3, max: 50, message: "医院名称长度应为3-50个字符", trigger: "blur" },
  ],
  sub_depname: [
    { required: true, message: "请输入科室名称", trigger: "blur" },
    { min: 1, max: 50, message: "科室名称长度应为3-50个字符", trigger: "blur" },
  ],
});

//确定支付,弹出二维码
const truePay = (form: any) => {
  form.validate((valid: any) => {
    if (valid) {
      //触发弹窗
      dialogVisible.value = true;
    } else {
      ElMessage({
        message: "您还未输入正确的数据",
        type: "error",
      });
    }
  });
};
const paySucess = () => {
  pushData.isPay = "是";
  dialogVisible.value = false;
  console.log(pushData.username);

  reqUserOrder(pushData);
  ElMessage({
    message: "支付成功，3秒后跳转到首页",
    type: "success",
  });
  setTimeout(() => {
    $router.push({ path: "/home" });
  }, 3000);
};
</script>

<style scoped>
.Main_content {
  .cotent {
    display: flex;
    margin-bottom: 25px;
    .right {
      width: 350px;
      margin: 0 auto;
      .from {
        width: 350px;
        height: 414px;
        line-height: 20px;
        .el-form-item {
          width: 400px;
        }
      }
    }
  }
  .buttom {
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
}
</style>
