import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const constantRoutes = [
  { path: "/", redirect: "/base" },
  {
    path: "vue2",
    redirect: "/vue2",
  },
  {
    path: "react",
    redirect: "/react",
  },
  {
    path: "vue3",
    redirect: "/vue3",
  },
];

const routers = new Router({
  mode: "history",
  routes: constantRoutes,
});

//路由守卫
routers.beforeEach(async (to, from, next) => {
  next();
});

export default routers;
