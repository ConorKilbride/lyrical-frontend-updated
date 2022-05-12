import Vue from "vue";
import Router from "vue-router";
//import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./pages/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./pages/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./pages/Register.vue")
    },
    {
      path: "/genres",
      name: "genres",
      component: () => import("./pages/Genres.vue")
    },

    //// ARTISTS ////

    {
      path: "/artists",
      name: "artists_index",
      component: () => import("./pages/Artists/Index.vue")
    },
    {
      path: "/artist/:_id",
      name: "artist_show",
      component: () => import("./pages/Artists/Show.vue")
    },
    {
      path: "/album",
      name: "album",
      component: () => import("./pages/Album.vue")
    },
    {
      path: "/song",
      name: "song",
      component: () => import("./pages/Song.vue")
    },
  ]
});
