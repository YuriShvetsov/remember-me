/* Main */
const path = require('path')
const webpack = require('webpack')

/* Plugins */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

/* Common config */
module.exports = {
  context: path.resolve(__dirname, '../src'),

  entry: {
    app: './index.js',
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash:8].js',
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader',
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts'
        }
      },
      {
        test: /\.(jpe?g|png|svg|webp|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images'
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './assets/images',
          to: '../dist/assets/images'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin(),
  ],

  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
}