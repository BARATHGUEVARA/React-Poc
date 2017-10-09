
// 'use strict'
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

var config = {
   entry:{ 
     main:'./source/app.js',
   vendor: [
     "react", 
   "react-dom", 
   "react-router-dom",
   "react-router",
]
  },


   output: { 
    path: path.resolve(__dirname, "./source"),
    filename: '[name].js',
    chunkFilename: "bundle_[name].js",
    publicPath: "/source/"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.index.js',
        minChunks: function (module, count) {
          var context = module.context;
          return context && context.indexOf('node_modules') >= 0;
        }
    }),
  ],


   devServer: {
      port: 3500,
      inline: true,
      publicPath: "/source",
      host:"0.0.0.0",
      disableHostCheck:true,
      historyApiFallback: true,
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;