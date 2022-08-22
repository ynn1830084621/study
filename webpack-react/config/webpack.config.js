const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: "./src/main.js",
    output: {
        path: isProduction ? path.resolve(__dirname, "../dist") : undefined,
        filename: isProduction ? "static/js/[name].[contenthash:10].js" : "static/js/[name].js",
        chunkFilename: isProduction ? "static/js/[name].[contenthash:10].chunk.js" : "static/js/[name].chunk.js",
        assetModuleFilename: "static/media/[hash:10][ext][query]",
        clean: true,
    },
    module: {
        rules: [
            //处理css
            {
                test: /\.css$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    {
                        //处理css兼容性问题
                        //配合package.json中browserslist来指定兼容性
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["postcss-preset-env"],
                            }
                        }
                    }
                ]
            },
            //处理图片
            {
                test: /\.(jpe?g|png|gif|webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    },
                },
            },
            //处理其他资源
            {
                test: /\.(woff2?ttf)$/,
                type: "asset/resource",
            },
            //处理js
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, "../src"),
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                    plugins: [
                        !isProduction && "react-refresh/babel",
                    ].filter(Boolean), //激活js的HMR功能
                }
            }
        ]
    },
    //处理html
    plugins: [
        new ESLintPlugin({
            context: path.resolve(__dirname, '../src'),
            exclude: "node_modules",
            cache: true,
            cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        }),
        isProduction && new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:10].css",
            chunkFilename: "static/css/[name].[contenthash:10].chunk.css",
        }),
        !isProduction && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    optimization: {
        splitChunks: {
            chunks: "all",
            // cacheGroups: {
            //     // react react-dom react-router-dom 打包成一个js文件
            //     react: {
            //         test: /[\\/]node_modules[\\/]react(.*)?[\\/]/,
            //         name: 'chunk-react',
            //         priority: 40,
            //     },
            //     // antd 单独打包
            //     antd: {
            //         test: /[\\/]node_modules[\\/]antd[\\/]/,
            //         name: 'chunk-antd',
            //         priority: 30,
            //     },
            //     // 剩下node-modules 单独打包
            //     libs: {
            //         test: /[\\/]node_modules[\\/]/,
            //         name: 'chunk-libs',
            //         priority: 20,
            //     },
            // },
        },
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}.js`,
        },
        //是否需要进行压缩
        minimize: isProduction,
        minimizer: [
            new CssMinimizerPlugin(), //css压缩
            new TerserWebpackPlugin(), //js压缩
        ]
    },
    //webpack解析模块加载选项
    resolve: {
        //自动补全文件扩展名
        extensions: ['.jsx', '.js', '.json']
    },
    performance: false,
};