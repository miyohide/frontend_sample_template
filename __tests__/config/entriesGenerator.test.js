const glob = require("glob");
const path = require("path");
const entriesGenerator = require("../../config/webpack/utils/entriesGenerator");
jest.mock("glob");

test("return entry files list", () => {
  glob.sync.mockReturnValue(["abcdefg.js"]);
  expect(entriesGenerator.getEntries(".")).toEqual({ abcdefg: "abcdefg.js" });
});

test("return HTMLWebpackPlugin", () => {
  const htmlWebpackPlugins = entriesGenerator.buildHtmlWebpackPlugins(
    { abc: "abc.js" },
    "."
  );
  expect(htmlWebpackPlugins[0].userOptions.filename).toBe("abc.html");
  expect(htmlWebpackPlugins[0].userOptions.chunks[0]).toBe("abc");
  expect(path.basename(htmlWebpackPlugins[0].userOptions.template)).toBe(
    "abc.html"
  );
});
