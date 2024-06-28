<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul class="hospital">
        <li class="active">全部</li>
        <li :class="{ active: activeFlag == level }" v-for="level in levelArr" :key="level" @click="changeLevel(level)">
          <span>{{ level == '1' ? '三级甲等' : level == '2' ? '二级乙等' : level == '3' ? '一级丁等' : '未知等级' }}</span>
        </li>
        <li style="color: #fef6d5">待定等级</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospital_Grade_Classify } from '@/api/hospital'
import { onMounted, ref } from 'vue'
//等级种类数据
const levelArr = ref([])
//控制高亮
const activeFlag = ref<string>('')
onMounted(() => {
  getLevel()
})
const getLevel = async () => {
  const result: any = await reqHospital_Grade_Classify()
  if (result.code == 200) {
    levelArr.value = result.data
  }
}

// 点击等级的回调
const changeLevel = (level: any) => {
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
