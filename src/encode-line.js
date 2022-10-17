const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let start;
  let end;
  if (arr[0] == arr[arr.length - 1]) {
    start = arr.shift();
    end = arr.pop();
  }

  let obj = {};
  arr.forEach((s) => (obj[s] = obj[s] + 1 || 1));

  let result = [];

  for (elem in obj) {
    if (obj[elem] != 1) {
      result.push(obj[elem]);
      result.push(elem);
    } else {
      result.push(elem);
    }
  }
  result.unshift(start);
  result.push(end);
  return result.join('');
}

module.exports = {
  encodeLine,
};
