const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    var ArrDepth = function (arr, depth) { 
      var depthArray = [];
      for (var i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            depth++;
            depthArray.push(ArrDepth(arr[i], depth));
          }
        } return depthArray.length === 0 ? depth : Math.max.apply(null, depthArray)
    }
    var depth = [];
    for (var i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    depth.push(ArrDepth(arr[i], 2))
  } 
} return depth.length === 0 ? 1 : Math.max.apply(null, depth);
}
}