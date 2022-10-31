const hello = require("../../src/javascripts/libs/hello");

test("return hello message", () => {
  expect(hello.hello("abc")).toBe("abcを出力しました");
})
