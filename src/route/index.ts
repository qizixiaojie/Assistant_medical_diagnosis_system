//导入创建实例方法
import { createRouter, createWebHashHistory } from "vue-router";
//createRouter（）方法，可以管理多个实例方法
export default createRouter({
  //路由管理配置
  history: createWebHashHistory(),
  //管理路由
  routes: [
    {
      path: '/home',
      //路由懒加载，更快导入
      component: () => import('@/pages/home/index.vue')
    },
    //路由重定向
    {
      path: '/',
      redirect: '/home'
    }
  ],
  //滚动行为，控制滚动条的位置
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})