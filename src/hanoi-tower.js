const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var turnsValue = Math.pow(2, disksNumber) - 1;
  var secondsValue = Math.floor(turnsValue/(turnsSpeed/3600));
  var obj = new Object();
  obj['turns'] = turnsValue;
  obj['seconds'] = secondsValue;
  return obj;
};
