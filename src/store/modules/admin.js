  
import Vue from 'vue'
import VueRouter from 'vue-router'

/* Router Modules */

// import Layout from '@/layout'

Vue.use(VueRouter)

export const constantRoutes = [ 
  // {
  //   path: '',
  //   hidden: true,
  //   redirect: 'diary',
  // },
  // {
  //   path: '/',
  //   hidden: true,
  //   redirect: 'diary',
  // },
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path*',
  //       component: () => import('@/views/diary/redirect/index')
  //     }
  //   ]
  // }
]

export const asyncRoutes = [
  
]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router