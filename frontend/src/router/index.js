import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import CustomView from '../views/CustomView.vue'
import GymwearView from '../views/GymwearView.vue'
import CommunityView from '../views/CommunityView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/custom',
    name: 'custom',
    component: CustomView
  },
  {
    path: '/gymwear',
    name: 'gymwear',
    component: GymwearView
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
