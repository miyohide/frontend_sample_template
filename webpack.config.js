const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');

// 対象パスのJavaScriptファイルを検索し、キーとしてRootからの相対パス＋ファイル名（拡張子なし）、
// 値として、ファイル名のMapを生成する。
const entries = WebpackWatchedGlobEntries.getEntries([path.resolve(__dirname, './src/javascripts/**/*.js')], {
  ignore: path.resolve(__dirname, './src/javascripts/**/_*.js'),
})();

// 与えられたentriesとHTMLが格納されているパスをもとにHtmlWebpackPluginを
// 動的に生成する
const htmlGlobPlugins = (entries, srcPath) => {
  return Object.keys(entries).map((key) =>
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: `${key}.html`,
      template: `${srcPath}/${key}.html`,
      chunks: [key],
    })
  );
};

module.exports = {
  mode: 'development',
  entry: entries,
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './javascripts/[name].js',
  },

  plugins: [
    ...htmlGlobPlugins(entries, './src/htmls')
  ],
};
