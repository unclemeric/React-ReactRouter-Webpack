/**
 * Created by Administrator on 2016/9/6.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var node_modules = path.resolve(__dirname, 'node_modules');

var Config = {
    entry: {
        utils:path.resolve(__dirname,'app/utils/autoChange.js'),
        bundle:path.resolve(__dirname, 'app/main.jsx')
    },
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'[name].js',
        publicPath:'/'
    },
    module:{
        loaders:[
            {
                test:/\.js[x]$/,
                loader:'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets:['react','es2015']
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'app'),
                loader: 'style!css!sass?sourceMap'
            },
            {
                test:/\.css$/,
                include: path.resolve(__dirname, 'app'),
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader:'url?limit=8192&path=/img/[hash].[ext]'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
            }
        ]
    },
    resolve: {
        extensions:['','.js','.jsx'],
    },
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('./build/main.css',{
            allChunks: true,
            disable: false
        }),
        new HtmlWebpackPlugin({
            title: 'your app title',
            template: './app/index.html',
            inject:'body',
            hash:true,
            favicon:'./favicon.ico',
        }),
    ]
}

module.exports = Config;