import { createWebHistory, createRouter } from 'vue-router';

import Bai1 from "../views/Bai1/Bai1.vue";
import ContactVue from "../views/Bai2/ContactVue.vue";
import Register from "../views/Bai3/Register.vue";
import Login from "../views/Bai4/Login.vue";
import NotFound from "../views/Bai5/NotFound.vue";
import AboutVue from "../views/Bai6/AboutVue.vue";
import Product from "../views/Bai7/Product.vue";
import Detail from "../views/Bai7/Detail.vue";
import ProductBai8 from "../views/Bai8/ProductBai8.vue";
import Navbar from "../views/Bai8/Navbar.vue";
import Dashboard from "../views/Bai8/Dashboard.vue";
import Account from "../views/Bai8/Account.vue";
import ListUser from "../views/Bai9/ListUser.vue"
import UserDetail from "../views/Bai9/UserDetail.vue"
import ListEmployee from "../views/Bai10/ListEmployee.vue"
import Profile from "../views/Bai10/Profile.vue"
import Project from "../views/Bai10/Project.vue"
import ContactBai10 from "../views/Bai10/ContactBai10.vue"
import Home from "../views/Bai11+12/Home.vue"
import Login2 from "../views/Bai11+12/Login11+12.vue"
import Register2 from "../views/Bai11+12/Register11+12.vue"

const routes = [
  { path: '/', component: Bai1 },
  { path: '/contact', component: ContactVue },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/about', component: AboutVue },
  { path: '/product', component: Product },
  { path: '/detail', component: Detail },
  {
    path: '/navbar',
    component: Navbar,
    children: [
      {
        path: 'product',
        name: 'product',
        component: ProductBai8
      },
      {
        path: 'account',
        name: 'account',
        component: Account
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
    ]
  },
  { path: '/listUser', component: ListUser },
  { path: '/userDetail/:id', component: UserDetail },
  { path: '/listEmployee', component: ListEmployee },
  {
    path: '/listEmployee/:id',
    component: ListEmployee,
    children: [
      {
        path: 'project',
        name: 'project',
        component: Project
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'contact',
        name: 'contact',
        component: ContactBai10
      },
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'login',
        component: Login2
      },
      {
        path: 'register',
        component: Register2
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
