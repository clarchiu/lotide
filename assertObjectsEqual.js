const eqArrays = function(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return false;
  }

  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) 
    return false;

  for (let key of keys1) {
    let value1 = object1[key];
    let value2 = object2[key];
    if (Array.isArray(value1)) {
      if (!eqArrays(value1, value2)) 
        return false;
    } else if (typeof value1 === 'object' && value1 !== null) {
      if (!eqObjects(value1, value2)) 
        return false;
    } else if (value1 !== value2){
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line

  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });