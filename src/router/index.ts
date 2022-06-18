import { createRouter, createWebHashHistory } from 'vue-router'
// 这里定义路由
const constantRoutes = [{
  path: '/',
  name: '/',
  component: () => import('../views/index.vue'),
  meta: {
    title: '首页',
    icon: 'HomeFilled'
  }
},
{
  path: '/login',
  name: 'Login',
  component: () => import('../views/Login/login.vue')
}]
const router = createRouter({
  history: createWebHashHistory('/'),
  routes: constantRoutes
})
export default router
