import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import AddC from '../components/AddC.vue'
import SubC from '../components/SubC.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/add',
      name: 'AddC',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddC //() => import('../views/AboutView.vue')
    },
    {
      path: '/sub',
      name: 'SubC',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SubC //() => import('../views/AboutView.vue')
    }
  ]
})

export default router
