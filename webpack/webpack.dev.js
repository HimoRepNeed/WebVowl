var loaders = require('./loaders');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
// var glob = require("glob");
module.exports = {
    entry: {
        //'vendor': ['./node_modules/d3//d3.js', './node_modules/angular/angular.js', './lib/lodash/lodash.min.js'],
        // app: 'app.js'
    },
    output: {
        path: 'dist',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map'
            // chunkFilename: '[id].chunk.js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.json', '.css', '.html']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules']
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/assets/',
            to: 'css'
        }, {
            from: './node_modules/d3/d3.js',
            to: ''
        }, {
            from: './node_modules/angular/angular.js',
            to: ''
        }, {
            from: './lib/lodash/lodash.min.js',
            to: ''
        }]),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8085,
            server: {
                baseDir: 'dist'
            },
            ui: false,
            online: false,
            notify: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        })
    ],
    module: {
        loaders: loaders
    }
};