const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== "string") return false;
  if ( Number(sampleActivity) !== "number") return false;
  if (sampleActivity < 0 || sampleActivity > 15) return false;
  var N = Math.log(MODERN_ACTIVITY/sampleActivity);
  var k = Math.LN2/HALF_LIFE_PERIOD;
  var result = Math.ceil(N/k);
  return result;
};
