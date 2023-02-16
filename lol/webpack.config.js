const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: ['./src/js/main.js', './src/css/main.css'],
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].[contenthash].js',
        environment: {
            arrowFunction: false,
        },
    },
    devServer:{
        proxy: {
            "/kr.api.riotgames.com":{
                target: "http://localhost:8080",
                pathRewrite: {"/kr.api.riotgames.com": "/"},
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'main.html'}),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: ['file-loader'],
            },
        ],
    },
    optimization: {
        minimizer: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],
    },
    mode:'development'
};