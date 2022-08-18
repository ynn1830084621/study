const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    //入口
    entry: './src/main.js',//相对路径
    //输出
    output: {
        path: undefined,//开发模式没有输出
        filename: 'static/js/main.js',
    },
    //加载器
    module: {
        rules: [
            //loader的配置
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
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
        })
    ],
    //开发服务器 不输出资源，在内存中编译打包
    devServer: {
        host: 'localhost',//启动服务器域名
        port: '3000',//启动服务器端口号
        open: true,//是否服务器打开
        hot: true,//开启HMR(热模块替换), 提升构建打包速度
    },
    //模块
    mode: 'development',
    devtool: 'cheap-module-source-map' // 打包编译速度快，只反应行映射
}