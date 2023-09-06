function toPattern(pattern, value, charToRepleace, usePlaceHolder = false) {
  var string = "";

  var aux = 0;

  for (let i = aux; i < pattern.length; i++) {
    if (pattern.charAt(i) === charToRepleace) {
      const newChar = value.charAt(aux);
      string += `${usePlaceHolder && !newChar ? pattern.charAt(i) : newChar}`;
      aux++;
    } else {
      string += pattern.charAt(i);
    }
  }

  return string;
}

module.exports = toPattern;
