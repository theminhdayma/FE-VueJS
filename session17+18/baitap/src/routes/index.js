// Định nghĩa danh sách các route
import { createWebHistory, createRouter } from "vue-router";

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
      component: () => import("../views/Bai1+2/Home.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      alias: ["/get-in-touch"],
      component: () => import("../views/Bai1+2/Contact.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/Bai1+2/About.vue"),
    },
    {
        path: "/search",
        name: "search",
        component: () => import("../views/Bai3/Search.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Bai5/Login.vue"),
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/Bai5/Dashboard.vue"),
    },
    {
        path: "/admin",
        name: "admin",
        // beforeEnter: (to, from, next) => {
        //   const isLogin = false
        //   if(!isLogin) {
        //     alert("Bạn kh có quyền truy cập trang này")
        //     next("/")
        //   }else {
        //     //Cho phép truy cập nếu đã đăng nhập
        //     next()
        //   }
        // },
        component: () => import( "../views/Bai6/Admin.vue"),
        children: [
          {
            path: "user",
            name: "user",
            component: () => import("../views/Bai6/Users.vue"),
          },
          {
            path: "product",
            name: "product",
            component: () => import("../views/Bai6/Products.vue"),
          },
          {
            path: "setting",
            name: "setting",
            component: () => import("../views/Bai6/Settings.vue"),
          },
        ]
      },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: () => import("../views/Bai4/NotFound.vue"),
    },
  ];

  // Cơ chế tạo định tuyến
export const router = createRouter({
    history: createWebHistory(),
    routes,
    // scrollBehavior (to, from, savedPosition) {
    //   if(savedPosition) {
    //     return savedPosition
    //   }else {
    //     return {top: 0, behavior: "smooth"}
    //   }
    // }
  });

// Tạo cơ chế bảo vệ route
router.beforeEach((to, from, next) => {
    const isLoggedIn = true;

    if (to.path === "/dashboard") {
      if (isLoggedIn) {
        next();
      } else {
        next("/login");
      }
    } else {
      next();
    }
  });

