const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== "string" || typeof options.addition !== "string") {
     str = String(str);
     options.addition = String(options.addition);
  }

  if (options.separator === undefined) {
   options.separator = "+"
  }
   
  if (options.additionSeparator === undefined) {
   options.additionSeparator = '|'
  }

  if (typeof options.repeatTimes !== "undefined" && options.repeatTimes === undefined) {
    options.repeatTimes = 1
  }

  if (typeof options.additionRepeatTimes !== "undefined" && options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }
  
  var arrString = []
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    arrString[i] = options.addition;
  }

  var additionStr = arrString.join(options.additionSeparator);

  var strNew = str + additionStr;

  var arrStrNew = []
  for (let j = 0; j < options.repeatTimes; j++) {
    arrStrNew[j] = strNew;
  }

  var resultStr = arrStrNew.join(options.separator);

  return resultStr;
};
  