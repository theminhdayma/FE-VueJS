import { createWebHistory, createRouter } from 'vue-router'

import HomeVue from '../views/HomeView.vue'
import AboutVue from '../views/AboutVue.vue'
import ContactVue from "../views/ContactVue.vue"
import UserDetail from "../views/UserDetail.vue"
import Product from "../views/Product.vue"
import ProductDetail from "../viewsProductDetail.vue"

const routes = [
  { path: '/', component: HomeVue },
  { path: '/about', component: AboutVue },
  { path: '/contact', component: ContactVue},
  { path: '/user/:id', component: UserDetail},
  {
    path: "/product",
    component: Product,
    children: [
      {
        path: "review",
        name: "product",
        component: ProductDetail
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})