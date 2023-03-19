
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
meta: {
  requiresAuth: true,
}
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue'),
    meta: {
      requiresAuth: true,
    }
  },
{
  path: '/login',
  name: 'login',
  component: () => import('../views/LoginPage.vue'),
}


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
