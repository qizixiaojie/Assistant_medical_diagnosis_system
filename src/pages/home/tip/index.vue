<template>
  <div class="tip">
    <div class="deparment">
      <div class="header">
        <div class="left">
          <img src="@/assets/images/home_全部科室.png" style="width: 20px" />
          <span style="letter-spacing: 1px; font-weight: 700; color: #333; font-size: 16px">常见科室</span>
        </div>
        <div class="right">
          <span>全部</span>
          <img src="@/assets/images/home_箭头右.png" style="width: 16px" />
        </div>
      </div>
      <div class="content">
        <ul>
          <li>神经内科</li>
          <li>消化内科</li>
          <li>呼吸内科</li>
          <li>内科</li>
          <li>神经外科</li>
          <li>妇科</li>
          <li>产科</li>
          <li>儿科</li>
        </ul>
      </div>
    </div>
    <div class="notice">
      <div class="header">
        <div class="left">
          <img src="@/assets/images/home_云平台.png" style="width: 20px" />
          <span style="letter-spacing: 1px; font-weight: 700; color: #333; font-size: 16px">停诊公告</span>
        </div>
        <div class="right">
          <span>全部</span>
          <img src="@/assets/images/home_箭头右.png" style="width: 16px" />
        </div>
      </div>
      <div class="content">
        <ul>
          <li>北京中医药大学东方医院部分科室医生门诊医</li>
          <li>武警总医院号源暂停更新通知</li>
          <li>关于延长北京大学国际医院放假的通知</li>
        </ul>
      </div>
    </div>
    <div class="notice">
      <div class="header">
        <div class="left">
          <img src="@/assets/images/home_停诊信息.png" style="width: 20px" />
          <span style="letter-spacing: 1px; font-weight: 700; color: #333; font-size: 16px">平台公告</span>
        </div>
        <div class="right">
          <span>全部</span>
          <img src="@/assets/images/home_箭头右.png" style="width: 16px" />
        </div>
      </div>
      <div class="content">
        <ul>
          <li>中国人民解放军总医院第六医学中心(原海军总医院)呼吸内科门诊停诊公告</li>
          <li>首都医科大学附属北京潞河医院老年医学科门诊停诊公告</li>
          <li>关于延长北京大学国际医院放假的通知</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.tip {
  color: #b1a9a9;
  font-size: 14px;
  .deparment {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
      .right {
        display: flex;
        align-items: center;
      }
    }
    .content {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 40%;
          margin-top: 20px;
        }
      }
    }
  }
  .notice {
    margin-top: 20px;
    .header {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        span {
          margin-left: 5px;
        }
      }
      .right {
        display: flex;
        align-items: center;
      }
    }
    .content {
      ul {
        li {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
