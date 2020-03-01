import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'edit',
        name: 'Edit',
        component: () => import('../views/Edit.vue'),
        meta: {
          auth: true
        }
      },
      {
        path: 'phonebook',
        name: 'PhoneBook',
        component: () => import('../views/PhoneBook.vue'),
        meta: {
          auth: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
