const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const WebpackConfig = require("./webpack.config");

const compiler = Webpack(WebpackConfig);
const devServerOptions = { ...WebpackConfig.devServer, open: true }; // open配置启动后是否自动打开浏览器
const server = new WebpackDevServer(devServerOptions, compiler);

server.start();
