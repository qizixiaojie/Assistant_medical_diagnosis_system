//vue3提供框架，创建实例
import { createApp } from 'vue'
//导入全局默认样式清除文件
import '@/styles/reset.scss'
//引入根组件App
import App from '@/App.vue'

//挂载全局组件
import Hospital_top from '@/components/hospital_top/index.vue'
import Hospital_bottom from '@/components/hospital_bottom/index.vue'

//引入elment-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import pinia from "@/store/index.ts"
//国际化语言
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//挂载vue-router核心组件
import router from '@/route'

//利用createApp方法创建应用实例，且将应用实例挂载到，静态index.html挂载点
const app = createApp(App)
app.component('Hospital_top', Hospital_top)
app.component('Hospital_bottom', Hospital_bottom)

//安装vue-router
app.use(router)
//安装element-plus
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(pinia)



app.mount("#app")
