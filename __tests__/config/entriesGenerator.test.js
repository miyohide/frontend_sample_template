const glob = require("glob");
const entriesGenerator = require("../../config/webpack/utils/entriesGenerator");
jest.mock("glob");

test("return entry files list", () => {
  glob.sync.mockReturnValue(["abcdefg.js"]);
  expect(entriesGenerator.getEntries(".")).toEqual({"abcdefg": "abcdefg.js"});
});
