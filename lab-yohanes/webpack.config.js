'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devServer:{
    historyApiFallback: true,
  },
  devtool: 'source-map',
  entry: `${__dirname}/source/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlPlugin({template: `${__dirname}/source/index.html`}),
    new ExtractTextPlugin('bundle-[hash].css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test:/\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
    ]
  }
};