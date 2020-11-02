const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(objectA, objectB) {
  let keysA = Object.keys(objectA);

  if (keysA.length !== Object.keys(objectB).length) 
    return false;

  for (let key of keysA) {
    let itemA = objectA[key];
    let itemB = objectB[key];
    let isArray = Array.isArray(itemA);
    let isObject = !isArray && itemA && typeof itemA === 'object';
    let isPrimitive = !isArray && !isObject;

    if (isPrimitive && itemA !== itemB) {
      return false;
    }
    if (isArray && !eqArrays(itemA, itemB)) {
      return false;
    } 
    if (isObject && !eqObjects(itemA, itemB)) {
      return false;
    } 
  }
  return true;
};

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const a = {a: '1'};
// assertEqual(eqObjects(ab, a), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// const cd3 = { c: "1", d: 2 };
// assertEqual(eqObjects(cd, cd3), false); // => false

// const test1 = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true
// assertEqual(test1, true);

// const test2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
// assertEqual(test2, false);

// const test3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
// assertEqual(test3, false);


// let quadNestedObj = {
//   a: {
//     b: {
//       c: 1,
//       d: {
//         e: {
//           f: 2,
//           g: 3
//         },
//         h: {
//           i: 'hello',
//           j: true
//         }
//       }
//     }
//   },
//   k: [1, 2, 3]
// }

// let quadNestedObjCpy = {
//   a: {
//     b: {
//       c: 1,
//       d: {
//         e: {
//           f: 2,
//           g: 3
//         },
//         h: {
//           i: 'hello',
//           j: true
//         }
//       }
//     }
//   },
//   k: [1, 2, 3]
// }

// const test4 = eqObjects(quadNestedObj, quadNestedObjCpy);
// assertEqual(test4, true);