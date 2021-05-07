const makeItAnon = (str) => {
  let result = '';
  let position = 0;
  for (let letter of str) {
    if (position === 0) {
      result += letter;
      position++;
    } else {
      result += '-';
    }
  }
  return result;
};

module.exports = makeItAnon;
