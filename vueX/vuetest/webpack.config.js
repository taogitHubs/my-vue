'use strict';
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //指定入口
    entry: {
        main: './main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            }, {
                test: /\.(jpg|ttf|svg|png|gif)$/,
                loader: 'url-loader?limit=4096'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                //排除路径
                exclude: /node_modules/,
                options: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            //处理.vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
        })
    ],


}