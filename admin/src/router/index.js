import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
}
    
  ]
})

export default router
