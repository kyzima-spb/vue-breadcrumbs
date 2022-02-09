import Breadcrumbs from 'vuex-breadcrumbs';
import Store from 'vuex-breadcrumbs/store';
import Vue from 'vue';


Vue.use(Breadcrumbs, {});


export default (ctx, inject) => {
  console.log('Breadcrumbs installation...');
  ctx.store.registerModule(
    'breadcrumbs',
    Store({
      index: { text: 'Главная', icon: 'home' },
      accessories: { text: 'Комплектующие' },
    }),
    {
      // preserveState: false,
    }
  );

  console.log(ctx.store.getters);
};
