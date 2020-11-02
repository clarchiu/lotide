// FUNCTION IMPLEMENTATION
const eqArrays = function(arrA, arrB) {
  if (arrA.length !== arrB.length) return false;

  for (let i = 0; i < arrA.length; i++) {
    if (!Array.isArray(arrA[i]) && arrA[i] !== arrB[i]) {
      return false;
    } else if (Array.isArray(arrA[i]) && !eqArrays(arrA[i], arrB[i])) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;