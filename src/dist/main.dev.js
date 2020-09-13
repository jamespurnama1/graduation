"use strict";

var _vueFullpage = _interopRequireDefault(require("vue-fullpage.js"));

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _buefy = _interopRequireDefault(require("buefy"));

var _vueFeather = _interopRequireDefault(require("vue-feather"));

var _vueCountdown = _interopRequireDefault(require("@chenfengyuan/vue-countdown"));

var _Landing = _interopRequireDefault(require("./Landing.vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _Individual = _interopRequireDefault(require("./pages/Individual.vue"));

var _Splash = _interopRequireDefault(require("./pages/Splash.vue"));

var _Group = _interopRequireDefault(require("./pages/Group.vue"));

var _Personal = _interopRequireDefault(require("./pages/Personal.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// window.gsap = gsap;
// Vue.use(gsap);
_vue["default"].use(_buefy["default"]);

_vue["default"].use(_vuex["default"]);

_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_vueFeather["default"]);

_vue["default"].use(_vueFullpage["default"]);

_vue["default"].component(_vueCountdown["default"].name, _vueCountdown["default"]);

_vue["default"].config.productionTip = false;
var routes = [{
  path: '/home',
  component: _Landing["default"]
}, {
  name: 'Splash',
  path: '/',
  component: _Splash["default"]
}, {
  path: '/infected',
  component: _Individual["default"]
}, {
  path: '/virus',
  component: _Group["default"]
}, {
  name: 'weihang',
  path: '/infected/weihang',
  component: _Personal["default"]
}, {
  path: '/infected/waiyee',
  component: _Personal["default"]
}, {
  path: '/infected/anh',
  component: _Personal["default"]
}, {
  path: '/infected/karmun',
  component: _Personal["default"]
}, {
  path: '/infected/szechien',
  component: _Personal["default"]
}, {
  path: '/infected/aurel',
  component: _Personal["default"]
}, {
  path: '/infected/sam',
  component: _Personal["default"]
}, {
  path: '/infected/huisan',
  component: _Personal["default"]
}, {
  path: '/infected/zhijian',
  component: _Personal["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: __dirname,
  routes: routes
});
new _vue["default"]({
  router: router,
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');