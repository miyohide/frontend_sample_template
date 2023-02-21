const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/javascripts/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './javascripts/index.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: './src/htmls/index.html',
      chunks: ['index'],
    }),
  ],
};
