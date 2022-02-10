import Breadcrumbs from 'vue-breadcrumbs';
import makeBreadcrumbsStore from 'vue-breadcrumbs/store';
import Vue from 'vue';


Vue.use(Breadcrumbs, {
  componentName: '<%= options.componentName %>',
  namespace: '<%= options.namespace %>',
});


export default (ctx, inject) => {
  const storePlugin = makeBreadcrumbsStore({
    breadcrumbs: <%= JSON.stringify(options.breadcrumbs, null, 2) %>,
  });
  storePlugin(ctx.store);
};
