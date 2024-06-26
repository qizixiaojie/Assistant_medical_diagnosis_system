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
    {
      path: '/hospital',
      component: () => import('@/pages/hospital/index.vue'),
      children: [
        {
          path: 'register',
          component: () => import('@/pages/hospital/register/index.vue')
        },
        {
          path: 'detail',
          component: () => import('@/pages/hospital/detail/index.vue')
        },
        {
          path: 'notice',
          component: () => import('@/pages/hospital/notice/index.vue')
        },
        {
          path: 'close',
          component: () => import('@/pages/hospital/close/index.vue')
        },
        {
          path: 'search',
          component: () => import('@/pages/hospital/search/index.vue')
        },
        {
          path: 'register_setupOne',
          component: () => import('@/pages/hospital/register/register_setpOne.vue')
        },
        {
          path: 'register_setupTwo',
          component: () => import('@/pages/hospital/register/register_setpTwo.vue')
        }
      ]
    },
    {
      path: '/user',
      component: () => import('@/pages/user/index.vue'),
      children: [
        {
          path: 'certification',
          component: () => import('@/pages/user/certification/index.vue'),
          meta: {
            title: '实名认证'
          }
        },
        {
          path: 'order',
          component: () => import('@/pages/user/order/index.vue'),
          meta: {
            title: '挂号订单'
          }
        },
        {
          path: 'patient',
          component: () => import('@/pages/user/patient/index.vue'),
          meta: {
            title: '就诊人管理'
          }
        },
        {
          path: 'profile',
          component: () => import('@/pages/user/profile/index.vue'),
          meta: {
            title: '账号信息'
          }
        },
        {
          path: 'feedback',
          component: () => import('@/pages/user/feedback/index.vue'),
          meta: {
            title: '信息反馈'
          }
        }
      ]
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