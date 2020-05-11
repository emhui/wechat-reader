import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    name: 'EBook',
    component: () => import('../views/EBook.vue'),
    children: [
      {
      path: ':filename',
      component: () => import('../components/EBook/index')
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
