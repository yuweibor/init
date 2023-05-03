const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  target: 'web',
  entry: {
    main: "./src/main.tsx",
    sub: "./src/sub.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle[hash:5].js",
  },
  resolve: {
    extensions: [".tx", ".js", ".json", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname,'src'),
      "_": __dirname
    }
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /.(png|jpg|jpeg|svg|gif|woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 100 * 1024,
            name: "static/[name].[hash:5].[ext]",
            esModule: false,
          },
        },
      },
      {
        test: /\.(js)|(ts)|(tsx)|(jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          { loader: "ts-loader" },
        ],
      },
    ],
  },
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: 'public', to: 'public' }
    //   ]
    // }),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/common.[hash:5].css"
    })
  ],
};
