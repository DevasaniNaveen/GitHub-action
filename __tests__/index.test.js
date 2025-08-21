const sayHello = require("../src/index");

test("returns correct message", () => {
  expect(sayHello("World")).toBe("Hello, World!");
});
