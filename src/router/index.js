import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddPersonaView from '@/views/AddPersonaView.vue';
import AddProductView from '@/views/AddProductView.vue';
import AddProductLoteView from '@/views/AddProductoLoteView.vue';
import Venta from '@/views/VentaView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/add-persona',
    name: 'add-persona',
    component: AddPersonaView,
  },
  {
    path: '/add-product',
    name: 'add-product',
    component: AddProductView,
  },
  {
    path: '/add-producto-lote',
    name: 'add-producto-lote',
    component: AddProductLoteView,
  },
  {
    path: '/VentaView',
    name: 'VentaView',
    component: Venta,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
