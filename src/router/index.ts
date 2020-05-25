import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pie-chart',
    name: 'PieChart',
    // route level code-splitting
    // this generates a separate chunk (PieChart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PieChart" */ '../views/PieChart.vue'),
  },
  {
    path: '/geographic-chart',
    name: 'Geographic',
    // route level code-splitting
    // this generates a separate chunk (Geographic.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Geographic" */ '../views/Geographic.vue'),
  },
  {
    path: '/edit-data',
    name: 'EditData',
    // route level code-splitting
    // this generates a separate chunk (EditData.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "EditData" */ '../views/EditData.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
