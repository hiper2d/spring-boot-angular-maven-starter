var webpack = require('webpack');
var helpers = require('./helpers');

var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

var env = (process.env.NODE_ENV || '').trim();

module.exports = {
    entry: {
        'polyfills': helpers.root('src/polyfills.ts'),
        'vendors': helpers.root('src/vendors.ts'),
        'boot': helpers.root('src/boot.ts')
    },

    output: {
        path: helpers.root('dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    resolve: {
        extensions: ['.js', '.ts', '.scss'],
        modules: [
            helpers.root('src'),
            helpers.root('node_modules')
        ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {configFileName: helpers.root('tsconfig.json')}
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/, //compiling loading component styles in stylesUrls
                include: helpers.root('src', 'app'),
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.css$/, //compiling lib components (i.e. @angular/material)
                include: [
                    helpers.root('node_modules'),
                    helpers.root('src', 'assets')
                ],
                loader: 'to-string-loader!css-loader?sourceMap'
            },
            {
                test: /\.scss$/, //compiling and loading global *.scss styles
                include: helpers.root('src', 'assets'),
                loader: ExtractTextPlugin.extract({ //move to a separate .css output
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/, //loading global *.css styles
                include: helpers.root('src', 'assets'),
                loader: ExtractTextPlugin.extract({ //move to a separate .css output
                    fallback: 'style-loader',
                    loader: 'css-loader?sourceMap'
                })
            }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('src'), // location of your src
            {} // a map of your routes
        ),

        new CommonsChunkPlugin({
            name: ['boot', 'vendors', 'polyfills']
        }),

        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/assets/images/favicon.ico'
        }),

        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            allChunks: true
        }),

        new LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false
            }
        })
    ]
};