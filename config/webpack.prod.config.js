const utils = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base.config");

console.log("+++++", baseConfig.mode);

module.exports = {
  ...baseConfig,
  mode: "production",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // webpack知道遵循该html模板运行app【即将app挂在到该模版】
      filename: utils.resolve("../dist/index.html"), // html模板的生成路径
      hash: true, // 在打包的资源插入html会加上hash
    }),
  ],
};
