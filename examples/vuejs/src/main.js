import Vue from 'vue'
import Breadcrumbs from '@kyzima-spb/vue-breadcrumbs';

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Breadcrumbs);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
