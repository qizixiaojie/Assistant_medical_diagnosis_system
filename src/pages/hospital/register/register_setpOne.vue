<template>
  <div class="wrap">
    <div class="top">
      <div class="hosname">北京XX医院</div>
      <div class="line"></div>
      <div>专科</div>
      <div class="hosdeparment">多发性硬化门诊</div>
    </div>
    <div class="center">
      <h1>20223.06.08</h1>
      <div class="container">
        <div class="item" v-for="item in 3" :key="item">
          <div class="tops">
            2024-06-24
            <h1>周一</h1>
          </div>
          <div class="bottom">内容</div>
        </div>
        <div class="item">
          <div class="tops Active">
            2024-06-23
            <h1>周一</h1>
          </div>
          <div class="bottom ActiveBot">内容</div>
        </div>
        <div class="item">
          <div class="tops Null">
            2024-06-23
            <h1>周一</h1>
          </div>
          <div class="bottom NullBot">内容</div>
        </div>
        <div class="item">
          <div class="tops NullActive">
            2024-06-23
            <h1>周一</h1>
          </div>
          <div class="bottom NullActiveBot">内容</div>
        </div>
      </div>
      <el-pagination layout="prev,pager,next" :total="50"></el-pagination>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrap {
  .top {
    margin-top: 20px;
    display: flex;
    color: #b1a9a9;
    letter-spacing: 2px;
    .line {
      width: 0.2px;
      height: 14px;
      margin: 4px 10px 4px 10px;
      background-color: #1296db;
    }
    .hosdeparment {
      top: 160px;
      left: 402px;
      color: black;
      font-size: 18px;
      font-weight: 600;
      position: absolute;
    }
  }
  .center {
    margin: 150px 0px 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .container {
      display: flex;
      width: 100%;
      margin: 35px 0px;
      .item {
        flex: 1;
        border: 1px solid rgb(194, 209, 215);
        margin: 0px 5px;
        text-align: center;
        border-radius: 5px;
        .tops {
          display: flex;
          border-radius: 5px;
          justify-content: center;
          background-color: #e8f2ff;
          margin-top: 0px;
          font-size: 14px;
          color: #1296db;
          padding: 10px 0px;
          h1 {
            font-size: 12px;
            margin-top: 2px;
            margin-left: 10px;
          }
        }
        .bottom {
          margin: 10px 0px;
          color: #1296db;
        }
        // 选择中
        .Active {
          background-color: #1296db;
          color: white;
          font-weight: 700;
        }
        .ActiveBot {
          margin: 10px 0px;
          font-weight: 700;
          color: #1296db;
        }
        // 普通无号
        .Null {
          background-color: #eee;
          color: #b1a9a9;
        }
        .NullBot {
          margin: 10px 0px;
          color: #b1a9a9;
        }
        // 选择无号
        .NullActive {
          color: white;
          font-weight: 700;
          background-color: #b1a9a9;
        }
        .NullActiveBot {
          margin: 10px 0px;
          color: #b1a9a9;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
