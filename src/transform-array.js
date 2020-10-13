const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var a = arr.length
  if (!Array.isArray(arr)) throw new Error();
  if( arr[0] === '--double-prev' || arr[0] === '--discard-prev') {
    arr.splice(0, 1);
  } else if(arr[a-1] === '--double-next' || arr[a-1] === '--discard-next') {
    arr.splice(a-1, 1);
  } else {
    for (var i = 0; i < arr.length; i++) {
      if ( arr[i] === '--double-next') {
        arr[i] = arr[i+1];
      } 
      if ( arr[i] === '--double-prev') {
        arr[i] = arr[i-1];
      }
      if ( arr[i] === '--discard-next') {
       arr.splice(i, 2);
      } 
      if ( arr[i] === '--discard-prev') {
       arr.splice(i-1, 2);
      }
    }
  }
  return arr;
};
