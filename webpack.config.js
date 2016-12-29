const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack.loaders');
const cssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');
const lost = require('lost');
const _ = require('lodash');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssCustomProperties = require('postcss-custom-properties');
const WebpackErrorNotificationPlugin = require('webpack-error-notification');
const SRC = path.resolve(__dirname, 'app');
const BUILD = path.resolve(__dirname, 'www');

const sharedVars = require('./app/colors').vars;

const lost_options = { "gutter": "26px", "flexbox": "flex", "cycle": "auto" };

let conf = {
    context: SRC,
    entry: {
        main: [
            'babel-polyfill',
            './client'
        ]
    },
    output: {
        path: BUILD,
        // publicPath: 'assets/',
        filename: '[name].bundle.js',
        library: 'store'
    },
    loader: loaders,
    postcss: () => [
        require('postcss-import'),
        require('postcss-extend'),
        require('postcss-mixins'),
        postcssCustomProperties({
            variables: sharedVars
        }),
        cssnext({
            browsers: ['last 2 versions', 'IE > 10']
        }),
        postcssReporter({
            clearMessages: true
        }),
        lost(lost_options)
    ],
    resolve: {
        root: [
            path.resolve(process.cwd(), 'app/shared')
        ],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new WebpackErrorNotificationPlugin(undefined, { notifyWarnings: false })
    ],
    devtool: 'source-map',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            },
            '/ws': {
                target: 'ws://localhost:3000',
                ws: true
            }
        }
    }
};

if (process.env.NODE_ENV === 'production') {
    conf.devtool = 'source-map';
}


module.exports = conf;