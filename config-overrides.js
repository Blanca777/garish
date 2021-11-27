const path = require('path')
const {override, adjustStyleLoaders, addWebpackAlias} = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
  }),
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('svg')) {
      rule.use.push({
        loader: require.resolve('svg-sprite-loader'),
        include: path.resolve(__dirname, 'src/common/icons/svg'),
      })
    }
  }),
)
