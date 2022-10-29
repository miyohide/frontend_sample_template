// eslint-disable-next-line no-undef
const glob = require("glob");
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-undef
const path = require("path");

// eslint-disable-next-line no-undef
exports.getEntries = (entryRoot) => {
  let entries = {};
  const filePaths = glob.sync(path.resolve(entryRoot, "*.js"), {
    ignore: path.relative(entryRoot, "libs", "*.js"),
  });
  filePaths.forEach((filePath) => {
    entries[path.basename(filePath, path.extname(filePath))] = filePath;
  });
  return entries;
};

// eslint-disable-next-line no-undef
exports.buildHtmlWebpackPlugins = (entries, templateRootPath) => {
  return Object.keys(entries, templateRootPath).map(
    (entryName) =>
      new HtmlWebpackPlugin({
        filename: `${entryName}.html`,
        template: path.resolve(templateRootPath, `${entryName}.html`),
        chunks: [entryName],
      })
  );
};
