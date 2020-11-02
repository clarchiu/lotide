const middle = function(array) {
  let arrLength = array.length;
  let midIndex = Math.floor((arrLength - 1) / 2);
  let toReturn = [];

  if (arrLength <= 2) {
    return toReturn;
  }

  toReturn.push(array[midIndex]);

  if (arrLength % 2 === 0) {
    toReturn.push(array[midIndex + 1]);
  }

  return toReturn;
};

module.exports = middle;