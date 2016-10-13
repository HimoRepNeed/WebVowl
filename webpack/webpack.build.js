var loaders = require("./loaders");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['./src/index.ts'],
    output: {
        filename: 'build.js',
        path: 'dist'
    },
    devtool: 'source-map',
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json', '.css']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            warning: false,
            mangle: true,
            comments: false
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new CopyWebpackPlugin([
            // {output} manifest.json 
            {
                from: './src/manifest.json'
            }, {
                from: 'src/assets/css',
                to: 'css'
            }, {
                from: './src/apiConfig.json'
            }, {
                from: 'src/app/home/services/peers/data',
                to: 'data'
            }
        ])
    ],
    module: {
        loaders: loaders
    }
};