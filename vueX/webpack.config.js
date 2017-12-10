'use strict';
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //指定入口
    entry: {
        //提取第三方的库文件
        vender: ['vue', 'vue-router', 'axios'],
        main: './src/main.js'
    },
    output: {
        //资源输出目录
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    module: {
        loaders: [{
                test: /\.css$/,
                //单独分离css
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })

            }, {
                test: /\.(jpg|ttf|svg|png|eot|woff2|woff|gif)$/,
                loader: 'url-loader?limit=4096' //依赖file-loader
            }, {
                test: /\.js$/,
                loader: 'babel-loader', //依赖babel-core
                //排除路径
                exclude: /node_modules/,
                options: {
                    presets: ['es2015'], //将es6关键字转换成es5
                    plugins: ['transform-runtime'] //es6函数转换
                }
            },
            //处理.vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader' //vue-loader 依赖于vue-template-compiler
            },
        ]
    },
    plugins: [
        //提取公共模块插件
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vender', 'minifast']
        }),

        //压缩插件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        //css分离插件
        //---------------
        new ExtractTextPlugin("style.[contenthash].css"),
        new htmlWebpackPlugin({
            template: './src/index.html',
            //未来移动到dist目录下能够有Index.html文件
            //自动加上引入output中的filename

        }),
        //---------------
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
    ],
    //---------------
    devServer: { //webpack自动启动一个Node的服务器帮助你转发
        proxy: {
            '/v2/*': { //请求以/v2/xxxx开头
                target: 'https://api.douban.com/',
                //https://api.douban.com/v2/xxx做代理
                changeOrigin: true,
            }
        }

    }
}