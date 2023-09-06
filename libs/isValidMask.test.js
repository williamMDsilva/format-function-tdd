const {
  MASK_CPF,
  MASK_CNPJ,
  VALUE_CPF,
  VALUE_CNPJ,
} = require("./constants/constants");
const isValid = require("./isValidMask");

test("expect to not mat the partial value maked with the mask", () => {
  expect(isValid(MASK_CPF, "000.")).toBe(false);
});

// ----- CPF -----
test("expect to match the value maked with the mask", () => {
  expect(isValid(MASK_CPF, VALUE_CPF)).toBe(true);
});

test("expect to not match the value maked with the mask", () => {
  expect(isValid(MASK_CNPJ, VALUE_CPF)).not.toBe(true);
});

// ----- CNPJ -----
test("expect to match the value maked with the mask", () => {
  expect(isValid(MASK_CNPJ, VALUE_CNPJ)).toBe(true);
});

test("expect to not match the value maked with the mask", () => {
  expect(isValid(MASK_CNPJ, VALUE_CPF)).not.toBe(true);
});
