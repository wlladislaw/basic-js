const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let min = 0
  let arr = n.toString().split('')
  arr.forEach(el => {
    if (el > min){
      min = el
    }
  })
  let index = arr.lastIndexOf(min)
  arr.splice(index-1,1).join('')
  return Number(arr.join(''))
}

module.exports = {
  deleteDigit
};
