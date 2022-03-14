import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

const Hesuan = () => import('../views/Hesuan/index.vue')
const Area = () => import('../views/Area/index.vue')
const Prevention = () => import('../views/Prevention/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hesuan',
    name: 'Hesuan',
    component: Hesuan
  },
  {
    path: '/area',
    name: 'Area',
    component: Area
  },
  {
    path: '/prevention',
    name: 'Prevention',
    component: Prevention
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
