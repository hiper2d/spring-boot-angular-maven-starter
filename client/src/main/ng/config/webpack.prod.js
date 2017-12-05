"use strict";


const fs = require('fs');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');

const ENV = process.env.npm_lifecycle_event ? process.env.npm_lifecycle_event : '';
const isAot = ENV.includes('aot');
const isProdServer = ENV.includes('prodServer');

let config = {};

config.devtool = 'inline-source-map';

if (isProdServer) {
    if (!fs.existsSync('./dist')) {
        throw "Can't find ./dist, please use 'npm run prod' to get it.";
    }

    // This is a dirty trick how to run the prod-aot build from the 'dist' folder in a Webpack server
    // The 'webpack-prod-server.js' is not necessary, but it prevents Webpack warnings.
    config.output = {};
    config.entry = {
        'server': './webpack-prod-server.js'
    };

    config.devServer = {
        contentBase: "./dist",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        historyApiFallback: true, // turn on HTML5 history api
        compress: true,// turn on gzip
        quiet: false, // skip extra logs
        inline: true,
        hot: false,
        stats: "minimal",
        port: 9000,
        overlay: { // cool death-window in case of Webpack death
            errors: true
        },
        watchOptions: {
            aggregateTimeout: 50,
            ignored: /node_modules/
        }
    };

    commonConfig.plugins = [
        new ExtractTextPlugin('[name].[hash].css')
    ];
}

if (isAot) {
    config.entry = commonConfig.entry;
    config.entry['app'] = './src/main-aot.ts';

    config.plugins = [
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: helpers.root('src/app/app.module.ts#AppModule'),
            sourceMap: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            },
            sourceMap: true
        }),
        new CopyWebpackPlugin([
            {from: 'index.html', context: './src'},
            {from: 'assets/themes/base/fonts/**/*', context: './src'},
            {from: 'assets/themes/base/images/other-images/**/*', context: './src'},
        ]),
        new WebpackOnBuildPlugin((stats) => {
            console.log('aot build is done');
        })
    ];
}

module.exports = webpackMerge(commonConfig, config);