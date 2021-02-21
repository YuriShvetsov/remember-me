const { merge } = require('webpack-merge')

const commonConfig = require('./webpack/webpack.common')
const developmentConfig = require('./webpack/webpack.dev')
const productionConfig = require('./webpack/webpack.prod')

module.exports = env => {
  switch (env.NODE_ENV) {
    case 'development':
      return merge(commonConfig, developmentConfig)
    case 'production':
      return merge(commonConfig, productionConfig)
    default:
      throw new Error('This configuration is not available.')
  }
}
