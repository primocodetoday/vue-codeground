import Home from "@/views/Home.vue";
import ComponentOne from "@/components/ComponentOne.vue";
import ComponentTwo from "@/components/ComponentTwo.vue";
import ViewProfile from "@/components/ViewProfile.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/one", name: "One", component: ComponentOne },
  { path: "/two", name: "Two", component: ComponentTwo },
  // :name of params is important because is passing via router
  { path: "/profile/:user_id", name: "ViewProfile", component: ViewProfile }
];

export default routes;
