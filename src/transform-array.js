const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrFirst) {
  var a = arrFirst.length;
  if (!Array.isArray(arrFirst)) throw new Error();
  var arr = [...arrFirst];
  if( arr[0] === '--double-prev' || arr[0] === '--discard-prev') {
    arr.splice(0, 1);
  }
   if(arr[a-1] === '--double-next' || arr[a-1] === '--discard-next') {
    arr.splice(a-1, 1);
  }
    for (var i = 0; i < a; i++) {
      if ( arr[i] === '--double-next' && i !==  a - 1) {
        arr[i] = arr[i+1];
      } 
      if ( arr[i] === '--double-prev' && i !== 0) {
        arr[i] = arr[i-1];
      }
      if ( arr[i] === '--discard-next' && i !==  a - 1) {
        if (arr.length > i+3 && typeof(arr[i+2]) != "number") {
          arr.splice(i+2, 1);
        }
       arr.splice(i, 2);
      } 
      if ( arr[i] === '--discard-prev' && i !== 0) {
       arr.splice(i-1, 2);
      }
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-next' || arr[i] === '--double-prev' || arr[i] === '--discard-next' || arr[i] === '--discard-prev') {
        transform(arr)
      }
    }
  return arr;
};
