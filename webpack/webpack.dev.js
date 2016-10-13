var loaders = require('./loaders')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
module.exports = {
  entry: {
    'vendor': './src/vendor.ts',
    'app': './src/index.ts'
  },
  output: {
    path: 'dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  // chunkFilename: '[id].chunk.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json', '.css', '.html']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/assets/',
      to: 'css'
    } // , {
    //         from: 'src/assets/js',
    //         to: 'js'
    //     }, {
    //         from: 'src/apiConfig.json'
    //     }, {
    //         from: 'bower_components/bootstrap/dist/css/bootstrap.css',
    //         to: 'css'
    //     }, {
    //         from: 'bower_components/bento-modern/bootstrap/platform-theme.min.css',
    //         to: 'css'
    //     }, {
    //         from: 'bower_components/bento-modern/components/platform-theme.css',
    //         to: 'css'
    //     }, {
    //         from: 'bower_components/bento-modern/fonts/',
    //         to: 'fonts'
    //     }, {
    //         from: 'src/app/home/services/peers/data',
    //         to: 'data'
    //     }
    //     // }, {
    //     //     from: 'bower_components/seiyria-bootstrap-slider/dist/css/bootstrap-slider.css',
    //     //     to: 'css'

    ]),
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
}
