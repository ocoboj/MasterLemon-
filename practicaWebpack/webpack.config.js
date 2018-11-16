var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');
var path = require('path');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
      extensions: ['.js', '.ts']
  },
  entry:{
      app: './students.ts',
      appStyles: [
          './mystyles.scss',
      ],
      vendor: [
          'jquery',
      ],
      vendorStyles: [
        '../node_modules/bootstrap/dist/css/bootstrap.css',
      ],
  },
 module:{
     rules: [
         {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader : 'awesome-typescript-loader',
            options:{
              useBabel:true,
              "babelCore" : "@babel/core", //need for Babel 7
             }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.scss$/, 
             use:[
                MiniCssExtractPlugin.loader,
                 "css-loader",
                "sass-loader",
            ]
        },
        {
            test: /\.css$/,                
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: 'css-loader',
              }
            ] 
        },
        {
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=2000'   
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        }
     ]
 }
};