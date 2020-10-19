const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (toString.call(date) !== "[object Date]") {
    throw new Error('Unable to determine the time of year!');
    }
  var month = date.getMonth(date);
  if (month !== date.getMonth(date)) {
    throw new Error();
    }
  if (month < 2 || month == 11) {
    return "winter";
  }
  if (1 < month && month < 5) {
    return "spring";
  }
  if (4 < month && month < 8) {
     return "summer";
  }
  if (7 < month && month < 11) {
    return "fall";
  }
 throw new Error();
};
