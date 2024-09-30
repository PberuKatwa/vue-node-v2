import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '@/views/Register.vue'
import List from '@/views/List.vue'
import UserDetail from '@/components/UserDetail.vue'
import ProductRegView from '@/views/productRegView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path:'/user-detail/:id',
      name:'user-detail',
      component:UserDetail,
      props:true
    },
    {
      path:'/product-registration',
      name:'product-registration',
      component:ProductRegView,
      props:true
    },

  ]
})

export default router
