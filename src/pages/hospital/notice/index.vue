<template>
  <div class="notice">
    <h4 class="hosname">{{ hospitalStore.hospitalInfo.hosname }}预约挂号须知</h4>
    <div class="top" style="text-indent: 2em">为方便您早日就医康复，请您认真阅读预约挂号须知:</div>
    <div class="info">
      <div class="tip">一、预约实名制：</div>
      <div class="text" style="text-indent: 2em">统一平台电话预约和网上预约挂号均采取实名制注册预约，请您如实提供就诊人员的真实姓名、有效证件号（身份证、护照）、性别、手机号码、社保卡号等基本信息。</div>
    </div>
    <div class="info">
      <div class="tip">二、预约挂号：</div>
      <div class="text" style="text-indent: 2em">
        <span>按照北京市卫健委统一平台要求，预约挂号规则如下：</span>
        <li>在同一自然日，同一医院，同一科室，同一就诊单元，同一就诊人，可以预约最多1个号源；</li>
        <li>在同一自然周，同一就诊人，可以预约最多8个号源； 在同一自然月，同一就诊人，可以预约最多12个号源；</li>
        <li>在同一自然季度，同一就诊人，可以预约最多24个号源。</li>
      </div>
    </div>
    <div class="info">
      <div class="tip">三、取消预约：</div>
      <div class="text" style="text-indent: 2em">已完成预约的号源，如需办理退号，至少在就诊前一工作日14:00前通过网站、微信公众号、114电话等平台预约渠道进行取消预约。</div>
    </div>
    <div class="info">
      <div class="tip">四、爽约处理：</div>
      <div class="text" style="text-indent: 2em">
        <span>如预约成功后患者未能按时就诊且不办理取消预约号视为爽约，同一患者在自然年内爽约规则如下：</span>
        <li>累计爽约3次，自3次爽约日起，90天内不允许通过114平台进行预约挂号；</li>
        <li>累计爽约6次，自6次爽约日起，180天内不允许通过114平台进行预约挂号。</li>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入医院详情仓库的数据
import useDetailStore from '@/store/modules/hospital_Datail.ts'
let hospitalStore = useDetailStore()
</script>

<style scoped lang="scss">
.notice {
  .hosname {
    font-weight: 700;
    text-align: center;
    font-size: 21px;
  }
  .top {
    color: #b1a9a9;
    margin: 10px 0px;
  }

  .info {
    .tip {
      font-size: 16 px;
      color: #333;
      font-weight: 900;
    }
    .text {
      color: #b1a9a9;
      margin: 10px 0px;
      line-height: 30px;
    }
  }
}
</style>
