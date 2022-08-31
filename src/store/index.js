import Vue from "vue";
import Vuex from "vuex";
import UserModule from "@/store/models/UserModule";
import PostModule from "./models/PostModule";
import ImagesModule from "./models/ImagesModule";
import AlbumsModule from "./models/AlbumsModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserModule,
    post: PostModule,
    image: ImagesModule,
    album: AlbumsModule
  },
});
