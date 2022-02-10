const { resolve } = require('path');


module.exports = function(moduleOptions) {
  const options = Object.assign(
    {
      breadcrumbs: {},
    },
    this.options.vueBreadcrumbs,
    moduleOptions,
  );

  this.addPlugin({
    src: resolve(__dirname, 'plugin.template.js'),
    fileName: 'vue-breadcrumbs.js',
    options,
  });

  // this.options.build.transpile.push(__dirname);
};


module.exports.meta = require('../package.json');
