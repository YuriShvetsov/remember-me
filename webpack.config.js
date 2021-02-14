const { merge } = require('webpack-merge')

const commonConfig = require('./webpack/webpack.common')
const developmentConfig = require('./webpack/webpack.dev')
const productionConfig = require('./webpack/webpack.prod')

module.exports = env => {
  if (env.development) {
    return merge(commonConfig, developmentConfig)
  }

  if (env.production) {
    return merge(commonConfig, productionConfig)
  }

  // throw new Error('No matching configuration was found!')
}
