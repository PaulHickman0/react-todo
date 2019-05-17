const webpack               = require('webpack');
const config                = require('../config');
const CleanWebpackPlugin    = require('clean-webpack-plugin');
const HappyPack             = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
        modules: [
            `${ config.paths.input }/js/`,
            `${ config.paths.input }/`,
            'node_modules'
        ],
        alias: {
            scss: `${ config.paths.input }/scss`,
            img: `${ config.paths.input }/img`,
            icons: `${ config.paths.input }/icons`,
            fonts: `${ config.paths.input }/fonts`
        }
    },
    entry: {
        vendor: [
            'prop-types',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-dom',
            'react-router-redux',
        ],
        app: [
            'babel-polyfill',
            './src/entry'
        ]
    },
    output: {
        path: `${ config.paths.output }/`,
        //publicPath: '/',
        filename: '[name].[hash].min.js',
        chunkFilename: '[name].[hash].min.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'happypack/loader',
            exclude: /node_modules/   
        }, {
            include: /\.json$/,
            loaders: ['json-loader']
        }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader', {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        disable: true
                    }
                }
            ]
        }]
    },
    plugins: [
        new HappyPack({
            loaders: [ 'babel-loader' ]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'runtime']
        }),
        new CleanWebpackPlugin(['*'], {
            root: config.paths.output
        }),
        new HtmlWebpackPlugin({
          template: 'app/index.html'
        })
    ]
};