import Home from "@/views/Home.vue";
import ComponentOne from "@/components/ComponentOne.vue";
import ComponentTwo from "@/components/ComponentTwo.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/one", name: "One", component: ComponentOne },
  { path: "/two", name: "Two", component: ComponentTwo }
];

export default routes;
