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
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
  target: ["web", "es5"],
};
