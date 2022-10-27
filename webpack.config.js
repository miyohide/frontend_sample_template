const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const entriesGenerator = require("./config/webpack/utils/entriesGenerator");

// developmentモードか否か
const isDev = process.env.NODE_ENV === "development";

const entries = entriesGenerator.getEntries(
  path.resolve(__dirname, "src", "javascripts")
);

// 補完を効かせるためのJSDoc
/** @type {import('webpack').Configuration} */

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "source-map" : undefined,
  entry: entries,
  output: {
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    // ビルドごとに出力先フォルダ（dist）内を削除する
    new CleanWebpackPlugin(),
    // CSSを別ファイルとして出力するためのプラグインのインスタンス作成
    new MiniCssExtractPlugin(),
    // HTMLもwebpackから出力するためのプラグインの設定
    ...entriesGenerator.buildHtmlWebpackPlugins(
      entries,
      path.resolve(__dirname, "src", "htmls")
    ),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        // SCSS or CSSファイルに対する処理
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
            },
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
