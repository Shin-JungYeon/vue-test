import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserList from "@/views/users/UserList";

// Vue 2.x 버전에서는 vue-router 3.x 버전 사용
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: UserList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
