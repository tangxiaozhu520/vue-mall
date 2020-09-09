import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      redirect: '/home'
    },
      {
      path: '/home',
      name: 'Home',
      component:Home
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import('views/Category.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('views/Cart.vue')
    },
    {
    path: '/profile',
    name: 'Profile',
    component: () => import('views/Profile.vue')
  },
      {
    path: '/detail',
    name: 'Detail',
    component: () => import('views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
