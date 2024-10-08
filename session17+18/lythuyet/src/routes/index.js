// Định nghĩa danh sách các route
import { createWebHistory, createRouter } from 'vue-router';

// import HomePage from "../views/HomePage.vue"
// import Contact from "../views/Contact.vue"
// import About from "../views/About.vue"
// import Feedback from "../views/Feedback.vue"
// import UserPage from "../views/UserPage.vue"
// import Profile from "../views/Profile.vue"

const routes = [
    {
      path: "/",
      name: "home",
      alias: ["/home", "/home-page"],
      component: () => import(/* webpackChunkname: "home" */ "../views/HomePage.vue"),
    },
    {
      path: "/contact",
      redirect: "/feedback",
      name: "contact",
      component: () => import(/* webpackChunkname: "contact" */ "../views/Contact.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkname: "about" */ "../views/About.vue"),
    },
    {
      path: "/feedback",
      name: "feedback",
      component: () => import(/* webpackChunkname: "feedback" */ "../views/Feedback.vue"),
    },
    {
      path: "/user/:id",
      redirect: to => `/profile/${to.params.id}`,
      name: "user",
      component: () => import(/* webpackChunkname: "user" */ "../views/UserPage.vue"),
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: () => import(/* webpackChunkname: "profile" */ "../views/Profile.vue"),

    },
    {
        path: "/listProduct",
        name: "listProduct",
        component: () => import(/* webpackChunkname: "listProduct" */ "../views/ListProduct.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import(/* webpackChunkname: "dashboard" */ "../views/DashBoard.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      beforeEnter: (to, from, next) => {
        const isLogin = false
        if(!isLogin) {
          alert("Bạn kh có quyền truy cập trang này")
          next("/")
        }else {
          //Cho phép truy cập nếu đã đăng nhập
          next()
        }
      },
      component: () => import(/* webpackChunkname: "admin" */ "../views/Admin.vue"),
      children: [
        {
          path: "managerUser",
          name: "managerUser",
          component: () => import(/* webpackChunkname: "managerUser" */ "../views/ManagerUser.vue"),
        },
        {
          path: "managerProduct",
          name: "managerProduct",
          component: () => import(/* webpackChunkname: "managerProduct" */ "../views/ManagerProduct.vue"),
        },
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import(/* webpackChunkname: "feedback" */ "../views/NotFound.vue"),
    },
  ];

  // Cơ chế tạo định tuyến
export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
      if(savedPosition) {
        return savedPosition
      }else {
        return {top: 0, behavior: "smooth"}
      }
    }
  });

// Tạo cơ chế bảo vệ route
router.beforeEach((to, from, next) => {
  
  //Mô tả người dùng chưa /đã đăng nhập
  const isLogin = false
  if(to.path === "/dashboard" && !isLogin) {
    // Điều hướng về trang chủ nếu chưa đăng nhập 
    next("/")
  }else {
    //Cho phép truy cập nếu đã đăng nhập
    next()
  }
})
