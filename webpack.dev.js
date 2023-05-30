const path = require('path');
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
module.exports = merge(baseConfig, {
  mode: "development",   //
  devtool: "inline-source-map",
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
  }
});