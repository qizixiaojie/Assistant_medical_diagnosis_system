<template>
  <el-card class="box-card" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="hospital_name">{{ hospitalCarData.hosname }}</div>
        <div class="tip">
          <div class="level">
            <img src="@/assets/images/home_赞.png" style="width: 16px" />
            <span>{{ hospitalCarData.hostype == '1' ? '三级甲等' : hospitalCarData.hostype == '2' ? '二级乙等' : hospitalCarData.hostype == '3' ? '一级丁等' : '未知等级' }}</span>
          </div>
          <div class="time">
            <img src="@/assets/images/home_闹钟.png" style="width: 16px" />
            <span>每天{{ hospitalCarData.daily_release_time }}放号</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img :src="`data:image/jpeg;base64,${hospitalCarData.logoData}`" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
//接受父亲传递过来的数据
defineProps(['hospitalCarData'])
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: space-between;
  .right {
    img {
      height: 50px;
      width: 50px;
    }
  }
  .left {
    width: 60%;
    .tip {
      color: #b1a9a9;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .level {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
      .time {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
