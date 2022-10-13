const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if(arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  function UserException(message) {
    this.message = message;
 }

 if(!Date.parse(date) ) {
  throw new UserException("Invalid date!");
 }

 if(date[Symbol.toStringTag] !== undefined  ) {
  throw new UserException("Invalid date!");

 }

  const month = Number( date.toLocaleDateString().split('.')[1]);

  if (month === 3 || month === 4 || month === 5) {
    return 'spring';
  } else if(month === 6 || month === 7 ||month === 8) {
    return 'summer';
  } else if( month === 9 || month === 10 || month === 11) {
    return 'autumn';
  } else  {
    return 'winter';
  }

}

module.exports = {
  getSeason
};
