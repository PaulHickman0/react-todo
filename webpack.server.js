/**
 * Require Browsersync along with webpack and middleware for it
 */
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const browserSync = require('browser-sync').create();

/**
 * Require ./webpack.config.js and make a bundler from it
 */
var webpackConfig = require('./webpack.config');
var bundler = webpack(webpackConfig);

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync.init({
    logLevel: 'info',
    server: {
        baseDir: './dist/static',
        middleware: [
            webpackDevMiddleware(bundler, webpackConfig.devServer),
            webpackHotMiddleware(bundler)
        ]
    }
});