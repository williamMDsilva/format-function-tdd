const {
  ARRAY_MASK_VEHICLE,
  PERSON_ID_DOCUMENT,
} = require("../libs/constants/constants");
const applyMask = require("./vanillaMaskArray");

// pattern 1
test("expect to match first of array", () => {
  expect(applyMask(ARRAY_MASK_VEHICLE, "NNN1234")).toBe("NNN-1234");
});

// --

test("expect to match second of array", () => {
  expect(applyMask(ARRAY_MASK_VEHICLE, "NNN1E34")).toBe("NNN1E34");
});

test("expect to match second of array", () => {
  expect(applyMask(ARRAY_MASK_VEHICLE, "BBBBBBB")).toBe(undefined);
});

// --

test("expect to match third of array", () => {
  expect(applyMask(ARRAY_MASK_VEHICLE, "9BGRD08X04G117974")).toBe(
    "9B.GR.D08X0.4.G.117974"
  );
});

// pattern 2
test("expect to match the CPF mask of array", () => {
  expect(applyMask(PERSON_ID_DOCUMENT, "00000000000")).toBe("000.000.000-00");
});

test("expect to match CNPJ mask of of array", () => {
  expect(applyMask(PERSON_ID_DOCUMENT, "12345678000100")).toBe(
    "12.345.678/0001-00"
  );
});

// pattern

test("expect to match CPF mask", () => {
  expect(applyMask("999.999.999-99", "00000000000")).toBe("000.000.000-00");
});

// ----

test("expect to match money mask", () => {
  expect(
    applyMask("CONFIGURATION", "1234567890", {
      // Decimal precision -> "90"
      precision: 2,
      // Decimal separator -> ",90"
      separator: ",",
      // Number delimiter -> "12.345.678"
      delimiter: ".",
      // Money unit -> "R$ 12.345.678,90"
      unit: "R$",
      // Money unit -> "12.345.678,90 R$"
      suffixUnit: "R$",
      // Force type only number instead decimal,
      // masking decimals with ",00"
      // Zero cents -> "R$ 1.234.567.890,00"
      zeroCents: true,
    })
  ).toBe("R$ 1.234.567.890,00 R$");
});
