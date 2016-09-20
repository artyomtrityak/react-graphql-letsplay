const webpack = require('webpack'),
      path = require('path'),
      StyleLintPlugin = require('stylelint-webpack-plugin');


module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8090',
      'babel-polyfill',
      'whatwg-fetch',
      './javascript/index.js'
    ]
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({

    }),
  ],
  output: {
    path: path.join('./build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/build/'
  },
  devServer: {
    port: 8090
  },
  devtool: 'source-map'
};