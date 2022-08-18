const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
    //入口
    entry: './src/main.js',//相对路径
    //输出
    output: {
        path: path.resolve(__dirname, '../dist'),//绝对路径
        filename: 'static/js/main.js',
        clean: true //自动清空上次打包内容
    },
    //加载器
    module: {
        rules: [
            //loader的配置
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, //将 CSS 提取到单独的文件
                    "css-loader"
                ],
            },
            {
                test: /\.png$/,
                type: 'asset',
                // 小于10kb图片转base64
                // 优点：减少请求数量 ；  缺点：体积会更大
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 10kb
                    }
                },
                generator: {
                    filename: 'static/images/[hash:10][ext][query]'
                }
            }
        ]
    },
    //插件
    plugins: [
        //plugin的配置
        new ESLintPlugin({
            //检测哪些文件
            context: path.resolve(__dirname, '../src')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/main.css"
        }),
        new CssMinimizerPlugin(),//压缩css
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        }),//PWA
    ],
    //模块
    mode: 'production',
    devtool: 'source-map' // 打包编译速度较慢，反应行列映射
    //devtool 开发者调试工具
}