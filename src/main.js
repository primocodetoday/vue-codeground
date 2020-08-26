import Vue from "vue";
import { InlineSvgPlugin } from "vue-inline-svg";
import App from "./App.vue";
import store from "./store";

Vue.use(InlineSvgPlugin);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
