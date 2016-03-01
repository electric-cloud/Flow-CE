'use strict';

var webpack = require('webpack'),
  path = require('path');

var VENDOR_LIBS = [
  'react',
  'react-dom',
  'classnames',
  'js-cookie'
];


module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8090',
      './on-boarding-video/javascript/index.js'
    ],
    vendor: VENDOR_LIBS
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['eslint']
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite?' + JSON.stringify({name: '[name]_[hash]'})
      }
    ]
  },
  output: {
    path: path.join('./on-boarding-video/build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/on-boarding-video/build/'
  },
  eslint: {
    configFile: '.eslintrc',
    emitError: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */'vendor', /* filename= */'vendor.bundle.js'
    )
  ],
  devServer: {
    port: 8090
  },
  devtool: 'source-map' // source maps with debugging, slow
  //devtool: 'eval-source-map'
};