import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import ElementUI from 'element-ui';
import routes from './routes.js';
import 'element-ui/lib/theme-chalk/index.css';
import Hljs from 'highlight.js'
// highlight.js
import 'highlight.js/styles/default.css'

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);


Vue.directive('highlightjs', {
  inserted: function (el) {
    let blocks = el.querySelectorAll('pre code');
    Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
