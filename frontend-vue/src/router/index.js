import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '@/views/Register.vue'
import List from '@/views/List.vue'
import ProductRegView from '@/views/productRegView.vue'
import Login from '@/views/Login.vue'
import ProductDetailView from '@/views/productDetailView.vue'

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
      component: List,
      
    },
    {
      path:'/product-registration',
      name:'product-registration',
      component:ProductRegView,
     
    },
    {
      path:'/login',
      name:'login',
      component:Login, 
    },
    {
      path:'/product',
      name:'product',
      component:ProductDetailView,
      
    }

  ]
})

export default router
