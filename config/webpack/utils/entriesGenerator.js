const glob = require("glob");
const path = require("path");

exports.getEntries = (entryRoot) => {
    let entries = {};
    const filePaths = glob.sync(path.resolve(entryRoot, "*.js"))
    filePaths.forEach(filePath => { entries[path.basename(filePath, path.extname(filePath))] = filePath} );
    return entries;
}
