const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
module.exports = merge(baseConfig, {
  mode: "development",   //
  devtool: "source-map",
  devServer: {
    hot: true,
    open: true
  }
});