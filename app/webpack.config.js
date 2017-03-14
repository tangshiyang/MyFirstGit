var webpack = require('webpack')

module.exports = {
  entry: './js/entry.js',
  output: {
    path: __dirname+'/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by zhaoda')
  ]
}