const webpack = require('webpack');
const path = require('path');
const PlayCanvasWebpackPlugin = require('playcanvas-webpack-plugin');
const configuration = require('./config.json');
configuration.browsers = configuration.browsers || "> 1%";

const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    mode: 'development',
    externals: {
        //jquery: 'jQuery',
        playcanvas: 'pc'
    },
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].build.js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new PlayCanvasWebpackPlugin({
            skipUpload: process.env.UPLOAD === "no" || !configuration.bearer || configuration.bearer.length != 32,
            bearer: configuration.bearer,
            project: configuration.projectId,
            files: configuration.files || {
                "main.build.js": {path: "main.build.js", assetId: configuration.assetId}
            }
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        // hot: true,
        disableHostCheck: true,
        overlay: true,
        inline: true,
        open: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.vue$/, loader: 'vue-loader', options: {hotReload: true} },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};

