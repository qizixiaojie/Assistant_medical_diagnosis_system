<template>
  <div class="login_container">
    <el-dialog v-model="userStore.visable" title="用户登录" width="500"> </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

//获取user仓库下面的数据visable，可以控制Login组件的对话框
import useUserStore from '@/store/modules/interface/user'
const userStore = useUserStore()
</script>
<script lang="ts">
export default {
  name: 'L ogin'
}
</script>

<style scoped></style>
