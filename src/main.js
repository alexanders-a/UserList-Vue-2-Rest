import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.scss";
import VueCarousel from "vue-carousel";

Vue.use(VueCarousel);

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

app.$mount("#app");
