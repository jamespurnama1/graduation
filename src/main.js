import VueFullPage from 'vue-fullpage.js';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import VueFeather from 'vue-feather';
import VueCountdown from '@chenfengyuan/vue-countdown';
import Landing from './Landing.vue';
import App from './App.vue';
import Individual from './pages/Individual.vue';
import Splash from './pages/Splash.vue';
import Group from './pages/Group.vue';
import Personal from './pages/Personal.vue';

// window.gsap = gsap;
// Vue.use(gsap);
Vue.use(Buefy);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueFeather);
Vue.use(VueFullPage);
Vue.component(VueCountdown.name, VueCountdown);
Vue.config.productionTip = false;

const routes = [
  { path: '/home', component: Landing },
  { name: 'Splash', path: '/', component: Splash },
  { path: '/infected', component: Individual },
  { path: '/virus', component: Group },
  { name: 'weihang', path: '/infected/weihang', component: Personal },
  { path: '/infected/waiyee', component: Personal },
  { path: '/infected/anh', component: Personal },
  { path: '/infected/karmun', component: Personal },
  { path: '/infected/szechien', component: Personal },
  { path: '/infected/aurel', component: Personal },
  { path: '/infected/sam', component: Personal },
  { path: '/infected/huisan', component: Personal },
  { path: '/infected/zhijian', component: Personal },
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
