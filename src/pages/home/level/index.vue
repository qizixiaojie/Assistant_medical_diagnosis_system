<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul class="hospital">
        <li :class="{ active: activeFlag == '' }">全部</li>
        <li v-for="level in levelArr" :class="{ active: activeFlag == level.value }" :key="level.value" @click="changeLevel(level.value)">{{ level.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from '@/api/home/index.ts'
import type { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/api/home/type.ts'
import { onMounted, ref } from 'vue'
onMounted(() => {
  getLevel()
})
//定义一个等级数组存储医院等级数据
const levelArr = ref<HospitalLevelAndRegionArr>([])

//获取医院等级数据
const getLevel = async () => {
  const result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType')
  //存储医院等级数据
  if (result.code == 200) {
    levelArr.value = result.data
  }
}
//控制医院等级高亮响应式数据
let activeFlag = ref<string>('')

//点击等级按钮的回调
const changeLevel = (level: string) => {
  activeFlag.value = level
}
</script>

<script lang="ts">
export default {
  name: 'Level'
}
</script>

<style scoped lang="scss">
.level {
  color: #b1a9a9;
  h1 {
    margin: 10px 0px;
    font-weight: 900;
  }
  .content {
    display: flex;
    .left {
      margin-right: 10px;
    }
    .hospital {
      display: flex;
      li {
        margin-right: 10px;
        &.active {
          color: #1296db;
        }
      }
      li:hover {
        color: #1296db;
        cursor: pointer;
      }
    }
  }
}
</style>
