const entriesGenerator = require("../../config/webpack/utils/entriesGenerator");
const path = require("path");

test("return entry files list", () => {
  expect(entriesGenerator.getEntries(path.resolve(__dirname, "..", "..", "src", "javascripts"))).toHaveProperty("index");
});
