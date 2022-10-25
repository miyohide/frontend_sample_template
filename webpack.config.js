const path = require('path');

// developmentモードか否か
const isDev = process.env.NODE_ENV === "development";

// 補完を効かせるためのJSDoc
/** @type {import('webpack').Configuration} */

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "source-map" : undefined,
  entry: "./src/index.js",
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
        // CSSファイルに対する処理
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
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
