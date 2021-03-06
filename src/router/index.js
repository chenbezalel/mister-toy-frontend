import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home-page.vue'
import toyApp from '../views/toy-app.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'
import dashboard from '../views/dashboard.vue'
import about from '../views/about-page.vue'
import login from '../views/login.vue'
import userDetails from '../views/user-details.vue'
import reviewsExplore from '../views/reviews-explore.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp,
    },
    {
      path: '/toy/:id',
      name: 'toy-details',
      component: toyDetails,
    },
    {
      path: '/toy/edit/:id?',
      name: 'toy-edit',
      component: toyEdit,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: reviewsExplore
      ,
    },
    {
      path: '/user/:id',
      name: 'user-details',
      component: userDetails
    }
  ]
})

export default router
