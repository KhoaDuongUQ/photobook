import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import AlbumDetail from '../views/AlbumDetail.vue'
import Albums from '../views/Albums.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUpPage',
    component: Signup,
  },
  {
    path: '/album/:id',
    name: 'AlbumDetailPage',
    component: AlbumDetail,
    meta: { requiresAuth: true },
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums,
    meta: { requiresAuth: true },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
