const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr) === false ) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) return [];


  //   function Error(message) {
  //     this.message = message;
  //  }

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (arr[i + 1] === undefined) continue;
      res.push(arr[i + 1]);
      continue;
    } else if (arr[i] === '--discard-prev') {
      res.pop();
      continue;
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 1] === undefined) continue;
      res.push(arr[i - 1]);
      continue;
    } else if (arr[i] === '--discard-next') {
      if (arr[i + 1] === undefined || arr[i + 2] === undefined) continue;
      if(typeof arr[i + 2] === 'string'  ) {i+=3;}
      else{
      i += 2;}
    }

    res.push(arr[i]);
  }
  return res;
}

module.exports = {
  transform,
};
