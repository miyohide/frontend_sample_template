const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

// developmentモードか否か
const isDev = process.env.NODE_ENV === "development";

// 補完を効かせるためのJSDoc
/** @type {import('webpack').Configuration} */

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "source-map" : undefined,
  entry: "./src/index.js",

  plugins: [
    // HTMLもwebpackから出力するためのプラグインの設定
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // <script> - </script>タグの挿入位置
      inject: "body",
      // スクリプト読み込みのタイプ
      scriptLoading: "defer"
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
      {
        // SCSS or CSSファイルに対する処理
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // devモードではソースマップをつける
              sourceMap: isDev,
            },
          },
          {
            loader: "sass-loader",
            options: {
              // devモードではソースマップをつける
              sourceMap: isDev,
            }
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
  target: ["web", "es5"],
};
