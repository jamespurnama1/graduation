import Vue from 'vue';
import VueFullPage from 'vue-fullpage.js';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import VueFeather from 'vue-feather';
import VueCountdown from '@chenfengyuan/vue-countdown';
// import notFound from '@/pages/notFound.vue';
import landing from './landing.vue';
import App from './App.vue';
import Individual from './pages/individual.vue';
import Group from './pages/group.vue';
import Personal from './pages/personal.vue';
import store from './store';

Vue.use(Buefy);
Vue.use(VueRouter);
Vue.use(VueFeather);
Vue.use(VueFullPage);
Vue.component(VueCountdown.name, VueCountdown);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: landing },
  { path: '/outbreak', component: Individual },
  { path: '/mutation', component: Group },
  { name: 'weihang', path: '/outbreak/weihang', component: Personal },
  {
    name: 'User', path: '/outbreak/:user', component: Personal, props: true,
  },
  // { path: '*', component: notFound },
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
