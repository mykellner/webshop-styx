import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Checkout from '../views/Checkout.vue'
import Category from '../views/Category.vue'
import Order from '../views/Admin/Order.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/category/:id', // the :id part is for dynamic parameter, category/1 ===>1 is dynamic and products changes based on the category id
    name: 'Category',
    component: Category
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Order
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
