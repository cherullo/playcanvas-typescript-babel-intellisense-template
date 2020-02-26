const webpack = require('webpack');
const path = require('path');
const PlayCanvasWebpackPlugin = require('playcanvas-webpack-plugin');
const configuration = require('./config.json');

configuration.browsers = configuration.browsers || "> 1%";

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
        modules: ['node_modules'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(j|t)s(x)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    cacheDirectory: true,
                    babelrc: false,
                    presets: [
                        [
                        '@babel/preset-env',
                        { targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
                        ],
                        '@babel/preset-typescript',
                        '@babel/preset-react',
                    ],
                    plugins: [
                        // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        ['@babel/plugin-proposal-class-properties', { loose: true }],
                        'react-hot-loader/babel',
                    ],
                    },
                },
            },
            {
                test: /\.css$/, use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
            // all files with a `.ts` extension will be handled by `ts-loader`
            { test: /\.ts/, loader: 'ts-loader' }
        ]
    }
};

