/* eslint-disable no-param-reassign */
import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import routes from "@/routes";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: "history" });

// Custom directives
// moved to local component showBlog
// Vue.directive("rainbow", {
//   bind(el) {
//     el.style.color =
//       "#" +
//       Math.random()
//         .toString()
//         .slice(2, 8);
//   },
// });

Vue.directive("theme", {
  bind(el, binding) {
    if (binding.value === "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value === "narrow") {
      el.style.maxWidth = "560px";
    }
    if (binding.arg === "column") {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});

// Filters
// moved to local component showBlog
// Vue.filter("to-uppercase", (value) => {
//   return value.toUpperCase();
// });
// Vue.filter("snippet", (value) => {
//   return value.slice(0, 100) + "...";
// });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
