const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  target: 'web',
  entry: {
    main: "./src/main.tsx",
    sub: "./src/sub.tsx",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle[hash:5].js",
    publicPath: 'auto',
  },

  resolve: {
    extensions: [".tx", ".js", ".json", ".jsx", ".tsx"],
    plugins: [
      new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })
    ]
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
        test: /\.(js|ts|jsx|tsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          {
            loader: "ts-loader",
          },
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ["main"],
      filename: 'main.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ["sub"],
      filename: 'sub.html',
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/common.[hash:5].css"
    })
  ],
};
