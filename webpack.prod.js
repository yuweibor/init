const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
module.exports = merge(baseConfig, {
  mode: "production",   //开启生产环境
  output: {
    clean: true   // 在生成文件之前清空 output 目录
  }
});