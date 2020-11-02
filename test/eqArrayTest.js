const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1], [1, 2]), false);

const test1 = eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
const test2 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
const test3 = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
const test4 = eqArrays([[[[[1], 2], 3], 4], 5, [6,7]], [[[[[1], 2], 3], 4], 5, [6,7]]);
const test5 = eqArrays([[[[[1], 2], 3], 4], 5, [6,7]], [[[[[1], 2], 3], 4], 5, [6,7,8]]);

assertEqual(test1, true);
assertEqual(test2, false);
assertEqual(test3, false);
assertEqual(test4, true);
assertEqual(test5, false);