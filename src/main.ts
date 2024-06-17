//vue3提供框架，创建实例
import { createApp } from 'vue'
//导入全局默认样式清除文件
import '@/styles/reset.scss'
//引入根组件App
import App from '@/App.vue'


//挂载全局组件
import Hospital_top from '@/components/hospital_top/index.vue'
import Hospital_bottom from '@/components/hospital_bottom/index.vue'


//引入vue-router核心插件并安装
import router from '@/router/index.ts'


//引入elment-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//利用createApp方法创建应用实例，且将应用实例挂载到，静态index.html挂载点
const app = createApp(App)
app.component('Hospital_top', Hospital_top)
app.component('Hospital_bottom', Hospital_bottom)
//安装路由插件
app.use(router)
//安装element-plus
app.use(ElementPlus)
app.mount("#app")
