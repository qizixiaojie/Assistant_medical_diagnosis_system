<template>
  <!-- 实名认证组件的结构 -->
  <el-card class="box-card">
    <!-- 卡片的头部 -->
    <template #header>
      <div class="card-header">
        <h1>实名信息</h1>
      </div>
    </template>
    <!-- 实名认证结构的提示部分 -->
    <div class="tip" style="color: #7f7f7f">
      <p>
        <el-icon><InfoFilled /></el-icon>完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前实名认证。
      </p>
    </div>
    <!-- 卡片身体的底部:认证成功的结构、认证未成功的结构 -->
    <!-- 注意它的渲染是0，和表单是相反的内容，因为是从后台渲染出来的全是实名认证的s -->
    <el-descriptions v-if="userInfo.authStatus == 0" size="small" class="margin-top" :column="1" border style="margin: 20px auto">
      <el-descriptions-item label-align="center" :width="20">
        <template #label>
          <div class="cell-item">用户姓名</div>
        </template>
        {{ userInfo.nickName }}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" :width="20">
        <template #label>
          <div class="cell-item">证件类型</div>
        </template>
        {{ userInfo.certificatesType == '10' ? '身份证' : '户口本' }}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" width="20px">
        <template #label>
          <div class="cell-item">证件号码</div>
        </template>
        {{ userInfo.certificatesNo }}
      </el-descriptions-item>
    </el-descriptions>
    <!-- 用户未验证的结构 -->
    <el-form v-if="userInfo.authStatus == 1" style="width: 60%; margin: 20px auto" label-width="80" ref="form">
      <el-form-item label="用户姓名" prop="name">
        <el-input placeholder="请输入用户姓名"></el-input>
      </el-form-item>
      <el-form-item label="证件类型" prop="certificatesType">
        <el-select style="width: 100%" placeholder="请选择证件类型">
          <el-option :label="item.name" :value="item.value" v-for="(item, index) in arrType" :key="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="证件号码" prop="certificatesNo">
        <el-input placeholder="请输入证件号码"></el-input>
      </el-form-item>
      <el-form-item label="上传证件" prop="certificatesUrl">
        <!-- action:upload组件向服务器提交图片路径
             limit:照片墙约束图片个数
             on-exceed:超出约束数量的钩子
        -->
        <el-upload ref="upload" list-type="picture-card" :limit="1" action="/api/oss/file/fileUpload?fileHost=userAuah">
          <img style="width: 100%; height: 100%" src="@/assets/images/user_上传图片.jpg" alt="" />
        </el-upload>

        <el-dialog>
          <img w-full style="width: 100%; height: 100%" alt="Preview Image" />
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default">提交</el-button>
        <el-button type="primary" size="default">重写</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
//引入element-plus图标
import { reqCertationType, reqUserInfo } from '@/api/user'
import { CertationArr, CertationTypeResponseData, UseringoResponseData } from '@/api/user/type'
import { InfoFilled } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
//存储用户信息
const userInfo: any = ref<any>({})
let arrType = ref<CertationArr>([])
//组件挂载完毕
onMounted(() => {
  //获取用户信息的方法
  getUserInfo()
  getType()
})

//获取用户信息方法
const getUserInfo = async () => {
  let result: UseringoResponseData = await reqUserInfo()

  if (result.code == 200) {
    userInfo.value = result.data
  }
}

//获取证件类型的数据
const getType = async () => {
  let result: CertationTypeResponseData = await reqCertationType()
  console.log(result.data)

  if (result.code == 200) {
    arrType.value = result.data
  }
}
</script>

<style scoped lang="scss">
.box-card {
  .tip {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
