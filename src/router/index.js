import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PhotoPageView from "../views/PhotoPageView.vue";
import FavoritesView from "../views/FavoritesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/favorites",
      name: "FavoritesView",
      component: FavoritesView,
    },
    {
      path: "/photo/:id",
      name: "PhotoPageView",
      component: PhotoPageView,
    },
  ],
});

export default router;
