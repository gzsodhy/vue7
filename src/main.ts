import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue';
const a=123

const setupAll = async () => {
  const app = createApp(App)
  app.use(ElementPlus)
  app.use(router)
  app.mount('#app')
}
setupAll()
