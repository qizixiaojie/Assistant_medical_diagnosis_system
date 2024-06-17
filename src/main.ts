//vue3提供框架，创建实例
import { createApp } from 'vue'
//引入根组件App
import App from './App.vue'
//利用createApp方法创建应用实例，且将应用实例挂载到，静态index.html挂载点
createApp(App).mount('#app')
