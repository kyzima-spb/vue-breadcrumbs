import Vue from 'vue'
import Vuex from 'vuex'
import { makeBreadcrumbsStore } from '@kyzima-spb/vue-breadcrumbs';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    makeBreadcrumbsStore({
      breadcrumbs: {
        'User': {text: 'Пользователь'},
      },
    }),
  ],
})
