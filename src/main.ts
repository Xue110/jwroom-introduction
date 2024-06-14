import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.less'
import 'normalize.css'
import router from './router/index'
import pinia from './store/index'
import registerIcons from './global/register-icons'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(registerIcons)
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')
