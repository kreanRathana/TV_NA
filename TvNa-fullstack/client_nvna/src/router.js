import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register'
import DetailLayout from './views/DetailLayout'
import ImageSlider from './views/ImageSlider'
import Login from './views/Login'
import Categories from './views/CategoriesPlace'

Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'ImageSlider',
        component: ImageSlider
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/categories',
        name: 'Categories',
        component: Categories
      },
      {
        path: '/detaillayout',
        name: 'detaillayout',
        component: DetailLayout
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      }
  
    ]
  })