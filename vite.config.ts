import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//因为有时候写的地址相对很杂，所以进行地址的简写，src的绝对路径
//导入node.js里面包路径来写
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //src文件的配置名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
    }
  },
  // server: {
  //   proxy: {
  //     '/api': { // 获取请求中带 /api 的请求
  //       target: 'http://localhost:8080',  // 后台服务器的源
  //       changeOrigin: true,   // 修改源
  //       rewrite: (path) => path.replace(/^\/api/, "")   //  /api 替换为空字符串
  //     }
  //   }
  // }
})
