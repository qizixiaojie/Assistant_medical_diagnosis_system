<template>
  <div class="search">
    <!-- 像是使用组件都是要深度选择的 -->
    <el-autocomplete :trigger-on-focus="false" placeholder="请你输入医院名称" :fetch-suggestions="fetchData" style="width: 600px" @select="getDetail" v-model="hosname" />
    <el-button type="primary" szie="default" :icon="Search" style="height: 48px">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
//引入element-plus提供的图标
import { reqHospital_NAMEE_KEY } from '@/api/hospital'
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

//收集医院的关键字
const hosname = ref<string>('')
//创建路由对象
const $router = useRouter()

//顶部搜索组件的回调组件
const fetchData = async (keyword: string, cb: any) => {
  const result: any = await reqHospital_NAMEE_KEY(keyword)
  //整理数据变成人家想要的数据
  const showData = result.data.map((item: { hosname: any; hoscode: any }) => {
    return {
      value: item.hosname, //展示的医院的名字
      hoscode: item.hoscode //存储医院的编码
    }
  })
  // 给组件展示数据
  cb(showData)
}
//点击某一个推荐项
const getDetail = (item: any) => {
  //点击搜索到的项目进入详情页面，将来需要携带query参数（医院的编码）
  $router.push({ path: '/hospital', query: { hoscode: item.hoscode } })
}
</script>
<script lang="ts">
export default {
  name: 'search'
}
</script>

<style scoped lang="scss">
.search {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  :deep(.el-input__wrapper) {
    height: 48px;
    margin-right: 10px;
  }
}
</style>
