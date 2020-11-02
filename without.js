const assertArraysEqual = require('./assertArraysEqual');

const without = function(arr, unwantedArr) {
  let filteredArr = arr.filter(elem => {
    return !unwantedArr.includes(elem);
  });
  return filteredArr;
}

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);