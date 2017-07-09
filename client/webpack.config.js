/* eslint-env node */

const { join } = require('path')
/* eslint-disable node/no-unpublished-require */
const { EnvironmentPlugin } = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
/* eslint-enable */


module.exports = {
  entry: join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'dist'),
  },

  resolve: {
    modules: [
      join(__dirname, 'src'),
      join(__dirname, 'node_modules'),
    ],
  },

  devtool: 'source-map',
  devServer: {
    contentBase: join(__dirname, 'dist'),
    proxy: {
      '/api': 'http://localhost:3002',
    },
    disableHostCheck: true,
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    }],
  },

  plugins: [
    new EnvironmentPlugin(['NODE_ENV']),
    new HTMLWebpackPlugin({
      template: join(__dirname, 'public/index.html'),
      inject: 'true',
    }),
  ],
}
