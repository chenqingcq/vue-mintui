import Vue from "vue";
import Router from "vue-router";
import App from "../App.vue";
import Vedio from "../components/vedio.vue";
import Hot from "../components/hot.vue";
import Vip from "../components/Vip.vue";
import User from "../components/User.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/vedio",
      component: Vedio
    },
    {
      path: "/hot",
      component: Hot
    },
    {
      path: "/vip",
      component: Vip
    },
    {
      path: "/user",
      component: User
    }
  ]
});
