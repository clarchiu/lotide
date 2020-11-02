const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  let toReturn = [];
  if (!Array.isArray(arr)) {
    toReturn.push(arr);
    return toReturn;
  }
  
  for (let elem of arr) {
    toReturn = toReturn.concat(flatten(elem));
  }
  return toReturn;
}

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5]);
// assertArraysEqual(flatten([1, [2, [3, [4, 5, 6]], 7]]), [1, 2, 3, 4, 5, 6, 7]);