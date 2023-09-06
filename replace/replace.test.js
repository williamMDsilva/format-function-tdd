const toPattern = require(`./replace`);

test("expect replace a pattern by chars", () => {
  expect(toPattern("##/##", "1608", "#")).toBe("16/08");
});

test("expect replace a pattern by chars", () => {
  expect(toPattern("**/**/****", "16082023", "*")).toBe("16/08/2023");
});

// ----
test("expect replace a pattern by chars", () => {
  expect(toPattern("##/##", "16", "#")).toBe("16/");
  expect(toPattern("##/##", "16", "#", true)).toBe("16/##");
});

test("expect replace a pattern by chars", () => {
  expect(toPattern("**/**/****", "1608", "*")).toBe("16/08/");
  expect(toPattern("**/**/****", "1608", "*", true)).toBe("16/08/****");
});
