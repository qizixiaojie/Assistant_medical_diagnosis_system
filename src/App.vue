<template>
  <div class="container">
    <!-- 顶部组件 -->
    <Hospital_top />
    <div class="content">
      <!-- 展示路由组件 -->
      <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <Hospital_bottom />
<<<<<<< HEAD
=======
    <!-- 这里肯定不可以跟组件内的 userStore.visiable 一样呀,你这里只需要把 login 组件放着 -->
    <!-- 点击那个登录/注册的时候,控制对话框的显示于隐藏，，，，对话框的展示状态怎么可以和组件一起，组件没有了，你哪来的对话框可以看？如果你老师是这么写的，那就是你没抄对 -->
>>>>>>> 93b986dd465e2f16704def106652ab1e052c137d
    <Login />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 100px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>
