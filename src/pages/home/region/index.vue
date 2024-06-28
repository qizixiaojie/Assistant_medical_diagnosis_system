<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{ active: RegionFlage == '' }">全部</li>
        <li v-for="item in regionArr.slice(0, 10)" :key="item" :class="{ active: RegionFlage == item }" @click="changeRegion(item)">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospital_Region_Classify } from '@/api/hospital'
import { onMounted, ref } from 'vue'

// 地区种类信息
const regionArr = ref([])
//地区高亮
const RegionFlage = ref('')
onMounted(() => {
  getRegin()
})
const getRegin = async () => {
  const result = await reqHospital_Region_Classify()
  if (result.code == 200) {
    regionArr.value = result.data
  }
}
//点击不同区域的高亮函数会调
const changeRegion = (item: any) => {
  RegionFlage.value = item
}
</script>

<script lang="ts">
export default {
  name: 'Region'
}
</script>

<style scoped lang="scss">
.region {
  color: #b1a9a9;
  margin-top: 10px;
  .content {
    cursor: pointer;
    display: flex;
    .left {
      // margin-right: 8px;
      width: 62px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
        &.active {
          color: #1296db;
        }
      }
      li:hover {
        color: #1296db;
      }
    }
  }
}
</style>
