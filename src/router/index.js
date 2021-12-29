import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";
import Home from "../views/Home.vue";
import DetailPage from "../views/DetailPage.vue";
import PlayCourse from "../views/PlayCourse.vue";
import Landing from "../views/Landing.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: MainPage,
    children: [
      {
        path: "/",
        name: "Landing",
        component: Landing,
      },
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/course-detail/:id",
        name: "Detail",
        component: DetailPage,
        props: true,
      },
      {
        path: "/play-course/:id",
        name: "PlayCourse",
        component: PlayCourse,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  base: "/home",
  routes,
});

export default router;
