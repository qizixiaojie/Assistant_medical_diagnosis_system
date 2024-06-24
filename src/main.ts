//vue3提供框架，创建实例
import { createApp } from 'vue'
//导入全局默认样式清除文件
import '@/styles/reset.scss'
//引入根组件App
import App from '@/App.vue'


//挂载全局组件
import Hospital_top from '@/components/hospital_top/index.vue'
import Hospital_bottom from '@/components/hospital_bottom/index.vue'
import Login from '@/components/login/index.vue'


//引入vue-router核心插件并安装
import router from '@/router/index.ts'


//引入elment-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//国际化语言
import zhCn from 'element-plus/es/locale/lang/zh-cn'

//引入pinia仓库
import pinia from '@/store'
//引入pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//利用createApp方法创建应用实例，且将应用实例挂载到，静态index.html挂载点
const app = createApp(App)
app.component('Hospital_top', Hospital_top)
app.component('Hospital_bottom', Hospital_bottom)
app.component('Login', Login)
//安装element-plus
app.use(ElementPlus, {
  locale: zhCn,
})
//安装路由插件
app.use(router)
//安装仓库
app.use(pinia)
//持久化仓库
pinia.use(piniaPluginPersistedstate)

app.mount("#app")
