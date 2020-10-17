import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Question from '../views/Question.vue'
import Help from '../views/Help.vue'
import Other from '../views/Other.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/main',
    component:Main
  },
  {
    path:'/Help',
    component:Help
  },
  {
    path:'/Question',
    component:Question
  },
  {
    path:'/Other',
    component:Other
  },
  {
    path:'/',
    component:Main
  }
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
