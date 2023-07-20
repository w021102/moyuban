import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '@/pages/loginPage.vue'
import EditPage from '@/pages/editPage.vue'
import indexPage from '@/pages/indexPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path:"/login",
        name:"login",
        component:LoginPage
      },{
        path:"/index",
        name:"index",
        component:indexPage
      },
      {
        path:"/edit",
        name:"edit",
        component:EditPage
      }
    ]
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
  history: createWebHashHistory(),
  routes
})

export default router
