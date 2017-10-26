"use strict";

const helpers = require('./helpers');
const webpack = require('webpack');

const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');

const ENV = process.env.npm_lifecycle_event ? process.env.npm_lifecycle_event : '';
const isStatic = ENV === 'start';
const isHmr = ENV === 'hmr';
const isProd = ENV === 'prod';
const isTest = ENV === 'test';
const isAot = ENV.includes('aot');

console.log(`You are in ${ENV} mode`);
let config = {};

config.entry = {
    'polyfills': './src/polyfills.ts',
    'vendors': './src/vendors.ts',
    'app': './src/main-jit.ts'
};

config.output = isTest ? {} : {
    path: helpers.root('./dist'),
    filename: '[name].[hash].js'
};

config.resolve = {
    extensions: ['.ts', '.js', '.json', '.html', '.scss', '.svg']
};

config.module = {
    rules: [
        {
            test: /\.ts$/,
            use: isAot ? [{loader: '@ngtools/webpack'}] : [
                {loader: 'awesome-typescript-loader?'},
                {loader: 'angular2-template-loader'},
                {loader: 'angular-router-loader'}
            ].concat(isHmr ? '@angularclass/hmr-loader?pretty=' + !isProd + '&prod=' + isProd : []),
            exclude: [/\.(spec|e2e|d)\.ts$/]
        },
        {
            test: /\.html$/, loader: 'raw-loader', // inserts html into js bundle
            exclude: [/node_modules\/(?!(ng2-.+))/, helpers.root('src/index.html')]
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?name=[name].[ext]&limit=10000&useRelativePath=true"
        },
        {
            test: /\.scss$/, // compiling loading component styles in stylesUrls
            include: helpers.root('src', 'app'),
            use: [
                {loader: "css-to-string-loader"},
                {loader: "css-loader"},
                {loader: "postcss-loader"},
                {loader: "sass-loader"}
            ]
        },
        {
            test: /\.scss$/, // compiling and loading global *.scss styles
            include: helpers.root('src', 'assets'),
            loader: ExtractTextPlugin.extract({ // move to a separate .css output
                use: [
                    {loader: "css-to-string-loader"},
                    {loader: "css-loader"},
                    {loader: "postcss-loader"},
                    {loader: "sass-loader"}
                ]
            })
        },
        {
            test: /\.css$/, // loading global styles
            include: helpers.root('src', 'assets'),
            loader: ExtractTextPlugin.extract({
                use: [
                    {loader: "css-to-string-loader"},
                    {loader: "css-loader"},
                    {loader: "postcss-loader"}
                ]
            })
        }
    ]
};

if (!isTest) {
    config.plugins = [
        new NoEmitOnErrorsPlugin(), // don't stop Webpack watcher in case of errors
        new DefinePlugin({
            'process.env': {
                'STATIC': isStatic,
                'HMR': isHmr,
                'PROD': isProd,
                'AOT': isAot
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendors', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/assets/favicon.ico'
        }),
        new ExtractTextPlugin('[name].[hash].css')
    ].concat(isHmr ? new HotModuleReplacementPlugin() : []);
}

module.exports = config;