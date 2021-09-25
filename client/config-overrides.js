const { override } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');

module.exports = override(
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        math: 'always',
        modifyVars: {
          'primary-color': '#389e0d',
          'link-color': '#52c41a',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
  }),
);
