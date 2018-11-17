var path = require('path');
var basePath = __dirname;
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './students.js',
        appStyles: [
            './mystyles.css',
        ],
        vendor: [
            'jquery',
        ],
    },
    output: {
        filename: '[name].[chunkhash].js',
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                },
            }
        },
    },
    

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html', // este esta en ./dist
          template: 'index.html', // este esta en ./
        }),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
      ]
};