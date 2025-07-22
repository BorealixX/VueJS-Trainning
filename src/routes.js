// import Home from "../components/Home.vue";
// import Shop from "../components/Shop.vue";
// import Blog from "../components/Blog.vue";
import App from "./App.vue";
import HomePage from "./components/HomePage.vue";
import Dashboard from "@/components/dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/shop", component: App },
  { path: "/blog", component: App },
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
