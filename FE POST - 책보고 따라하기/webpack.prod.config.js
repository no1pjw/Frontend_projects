const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].[contenthash].js',
        environment: {
            arrowFunction : false,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src/js')],
                exclude: '/node_modules/',
                use:{
                    loader: 'babel-loader'
                },
            }
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],
    },
};