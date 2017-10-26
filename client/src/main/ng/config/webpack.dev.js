"use strict";

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const WebpackOnBuildPlugin = require('on-build-webpack');

const ENV = process.env.npm_lifecycle_event ? process.env.npm_lifecycle_event : '';
const isHmr = ENV === 'hmr';

let devConfig = {};

devConfig.devtool = 'inline-source-map';

devConfig.devServer = {
    contentBase: "./src",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    historyApiFallback: true, // turn on HTML5 history api
    compress: true,// turn on gzip
    quiet: false, // skip extra logs
    inline: true, // inline mode
    hot: isHmr, // turn on hmr if its needed
    stats: "minimal",
    port: 9002,
    overlay: { // cool death-window in case of Webpack death
        errors: true
    },
    watchOptions: {
        aggregateTimeout: 50,
        ignored: /node_modules/
    }
};

devConfig.plugins = [
    new WebpackOnBuildPlugin((stats) => {
        console.log('dev/hmr build is done');
    })
];

module.exports = webpackMerge(commonConfig, devConfig);