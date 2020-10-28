const flatten = function(arr) {
  let toReturn = [];
  if (!Array.isArray(arr)) {
    toReturn.push(arr);
    return toReturn;
  }
  
  for (let elem of arr) {
    toReturn = toReturn.concat(flatten(elem));
    console.log(toReturn);
  }

  return toReturn;
}

const eqArrays = function(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return false;
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
}

//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
//assertArraysEqual(flatten([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([1, [2, [3, [4, 5, 6]], 7]]), [1, 2, 3, 4, 5, 6, 7]);