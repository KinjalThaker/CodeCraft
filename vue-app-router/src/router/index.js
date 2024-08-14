import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/Jobs/JobsView.vue'
import JobDetailsView from '../views/Jobs/JobDetailsView.vue'
import AddView from '../views/Jobs/AddView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs/',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetailsView,
    props: true
  },
  {
    path: '/jobs/add',
    name: 'AddJob',
    component: AddView
  },
  {
    path: '/jobs/:id',
    name: 'UpdateJob',
    component: AddView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
