import { RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import('@/pages/home.vue'))
  }
]

export default routes
