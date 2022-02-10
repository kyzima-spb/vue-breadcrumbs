const makeVueComponent = require('./component');
const BreadcrumbsMixin = require('./mixin');


module.exports = (Vue, config = {}) => {
  Vue.component(
    config.componentName || 'VueBreadcrumbs',
    makeVueComponent(config)
  );

  Vue.mixin(BreadcrumbsMixin);
};
