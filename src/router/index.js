import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'views/layout/layout'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/index'},
    {path:'/index',component:Layout},
  ]
})
