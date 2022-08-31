import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/Home.vue";
import User from "@/views/user/UserView.vue";
import PostList from "@/components/Posts/PostList.vue";

import AlbumsList from "@/components/Albums/AlbumsList.vue";
import ImageList from "@/components/Images/ImagesList.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users/:id",
    component: User,
  },
  {
    path: "/users/:id/posts",
    component: PostList,
  },
  {
    path: "/users/:id/albums",
    component: AlbumsList,
  },
  {
    path: "/users/:id/albums/:id",
    component: ImageList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
