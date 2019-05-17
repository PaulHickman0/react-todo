const webpack               = require('webpack');
const config                = require('../config');
const packageJosn           = require('../package.json');
const HtmlWebpackPlugin     = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client'
        ]
    },
    module: {
        rules: [{
            test: /\.s?css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    autoprefixer: false
                }
            }, {
                loader: 'sass-loader'
            }]
        }]
    },
    devServer: {    
        inline: true,
        publicPath: '/',
        filename: '[name].min.js',
        stats: 'errors-only',
        historyApiFallback: true,
        outputPath: `${ config.paths.output }/app`
    },
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
        // do not emit compiled assets that include errors
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
          template: 'app/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                DEBUG: true,
                VERSION: JSON.stringify(packageJosn.version),
                PROJECT_NAME: JSON.stringify(packageJosn.name),
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};