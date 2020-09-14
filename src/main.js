import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import VueFeather from 'vue-feather';
import App from './App.vue';
import store from './store';

const notFound = () => import('@/pages/notFound.vue');
const Group = () => import('@/pages/group.vue');
const Personal = () => import('@/pages/personal.vue');
const landing = () => import('@/landing.vue');
const Individual = () => import('@/pages/individual.vue');

Vue.use(Buefy);
Vue.use(VueRouter);
Vue.use(VueFeather);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: landing },
  { path: '/aid', component: Individual },
  { path: '/antidote', component: Group },
  {
    name: 'User',
    path: '/aid/:user',
    component: Personal,
    props: true,
  },
  { name: '404', path: '/404', component: notFound },
  { path: '*', redirect: '/404' },
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
