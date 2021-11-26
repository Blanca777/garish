const path = require('path')
const {override, adjustStyleLoaders, addWebpackAlias} = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    ['@src']: path.resolve(__dirname, 'src'),
    ['@components']: path.resolve(__dirname, 'src/components'),
  }),
  adjustStyleLoaders(rule => {}),
)
