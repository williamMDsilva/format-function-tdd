const VMasker = require("vanilla-masker");
const isValidMask = require("../libs/isValidMask");

function applyMask(masks = [], value, configuration, index = 0) {
  if (masks.length === index) return undefined;
  if (configuration !== undefined) return VMasker.toMoney(value, configuration);
  if (typeof masks === "string") return VMasker.toPattern(value, masks);

  const newValue = VMasker.toPattern(value, masks[index]);

  if (isValidMask(masks[index], newValue)) return newValue;

  return applyMask(masks, value, undefined, index + 1);
}

module.exports = (masks, value, configuration, index = 0) =>
  applyMask(
    masks,
    value,
    masks === "CONFIGURATION" ? configuration : undefined,
    index
  );
