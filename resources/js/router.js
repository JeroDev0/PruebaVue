import { createRouter, createWebHistory } from 'vue-router';
import Planes from './components/Planes.vue';
import Contador from './components/Contador.vue';

const routes = [
  { path: '/', component: Planes },
  { path: '/contador', component: Contador },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
