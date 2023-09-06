const validadeMask = (mask, value) => {
  const is_alpha = /^[a-z0-9]+$/i;
  if (mask.length != value.length) return false;

  for (let i = 0; i < value.length; i++) {
    if (is_alpha.test(value.charAt(i))) {
      if (!["#", "S", "9"].includes(mask.charAt(i))) return false;
    } else {
      if (value.charAt(i) !== mask.charAt(i)) return false;
    }
  }

  return true;
};

module.exports = validadeMask;
