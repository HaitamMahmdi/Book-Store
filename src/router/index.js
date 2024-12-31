import { createWebHistory, createRouter } from "vue-router"; // Use createWebHistory
import Home from "../views/Home.vue";
import { useAuthStore } from "../store/authStore";
import { getAuth } from "firebase/auth";
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
  {
    path: "/books",
    name: "books",
    component: () => import("../views/Books.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for client-side routing
  routes,
});
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Log the navigation attempt
  console.log("Navigating to:", to.name);

  if (to.meta.requiresAuth && !authStore.user) {
    next({ name: "singUp" });
  } else {
    next();
  }
});
export default router;
