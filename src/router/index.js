import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/diary",
    name: "Diary",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/diary/Diary.vue")
  },
  {
    path: "/finance",
    name: "Finance",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/finance/Finance.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
