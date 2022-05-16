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
      name: "artist_index",
      component: () => import("./pages/Artists/Index.vue")
    },
    {
      path: "/artists/:_id",
      name: "artist_show",
      component: () => import("./pages/Artists/Show.vue")
    },

    //// ALBUMS ////

    {
      path: "/album",
      name: "album",
      component: () => import("./pages/Album.vue")
    },
    {
      path: "/album/:_id",
      name: "album_show",
      component: () => import("./pages/AlbumShow.vue")
    },

    //// SONGS ////
    {
      path: "/songs",
      name: "songs",
      component: () => import("./pages/Songs.vue")
    },
    {
      path: "/songs/:_id",
      name: "song_show",
      component: () => import("./pages/SongShow.vue")
    },
  ]
});
