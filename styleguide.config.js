/* eslint-disable global-require */
module.exports = {
  webpackConfig: require('./webpack/development'),
  components: 'src/component/**/index.tsx',
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    componentNameResolver: (_, s) => {
      const componentName = s.fileName.split('/').reverse()[1];
      return componentName[0].toUpperCase() + componentName.substring(1);
    },
  }).parse,
  styleguideDir: 'build/styleguide',
};
