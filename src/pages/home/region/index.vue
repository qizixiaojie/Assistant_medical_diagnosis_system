<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{ active: RegionFlag == '' }">全部</li>
        <li v-for="item in RegionArr" :key="item.value" :class="{ active: RegionFlag == item.value }" @click="changeRegion(item.value)">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from '@/api/home/index.ts'
import type { HospitalLevelAndRegionResponseData, HospitalLevelAndRegionArr } from '@/api/home/type.ts'
import { onMounted, ref } from 'vue'
//存储地区的数据
const RegionArr = ref<HospitalLevelAndRegionArr>([])

onMounted(() => {
  getRegion()
})

//获取地区数据
const getRegion = async () => {
  const result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Beijin')
  if (result.code == 200) {
    RegionArr.value = result.data
  }
}
//定义相应数据的高亮
const RegionFlag = ref('')
//定义点击的函数
// 并将地区数据传递给父亲
const changeRegion = (item: string) => {
  RegionFlag.value = item
  //将数据传递给父亲
  $emit('getRegion', item)
}
const $emit = defineEmits(['getRegion'])
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
