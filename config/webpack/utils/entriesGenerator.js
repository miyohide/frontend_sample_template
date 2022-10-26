const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

exports.getEntries = (entryRoot) => {
  let entries = {};
  const filePaths = glob.sync(path.resolve(entryRoot, "*.js"))
  filePaths.forEach(filePath => { entries[path.basename(filePath, path.extname(filePath))] = filePath });
  return entries;
}

exports.buildHtmlWebpackPlugins = (entries, templateRootPath) => {
  return Object.keys(entries, templateRootPath).map(
    entryName => new HtmlWebpackPlugin({
      filename: `${entryName}.html`,
      template: `${templateRootPath}/${entryName}.html`,
      chunks: [entryName]
    })
  )
}
