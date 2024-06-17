//vue3提供框架，创建实例
import { createApp } from 'vue'
//导入全局默认样式清除文件
import '@/styles/reset.scss'
//引入根组件App
import App from '@/App.vue'


//挂载全局组件
import Hospital_top from '@/components/hospital_top/index.vue'
import Hospital_bottom from '@/components/hospital_bottom/index.vue'

//利用createApp方法创建应用实例，且将应用实例挂载到，静态index.html挂载点
const app = createApp(App)
app.component('Hospital_top', Hospital_top)
app.component('Hospital_bottom', Hospital_bottom)
app.mount("#app")
