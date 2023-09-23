import Vue from 'vue'
import App from './App.vue'
import router from './router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({easing: 'ease', speed: 500, showSpinner: false});
Vue.prototype.$NProgress = NProgress;

import "element-ui/lib/theme-chalk/index.css";
import {ElementUI} from "@/common/config/ElementUI";

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  NProgress.start();
  switch (to.path) {
    case "/test":
    case "/demo":
      document.title = (<Record<string, any>>to.meta).title;
      next();
      break;
    case "/":
      next();
      break;
    default:
      next({path: "/"});
  }
});

router.afterEach(() => {
  NProgress.done();
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
