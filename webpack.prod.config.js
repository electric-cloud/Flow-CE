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
    onboading: './on-boarding-video/javascript/index.js',
    vendor: VENDOR_LIBS
  },
  module: {
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
      }
    ]
  },
  output: {
    path: path.join('./on-boarding-video/build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */'vendor', /* filename= */'vendor.bundle.js'
    )
  ]
};