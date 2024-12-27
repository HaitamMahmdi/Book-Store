import { createWebHistory, createRouter } from "vue-router"; // Use createWebHistory
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/singUp",
    name: "singUp",
    component: () => import("../views/SingUp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for client-side routing
  routes,
});

export default router;
