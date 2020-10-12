const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let matrixNew = matrix.reduce(
      (result, element) => result.concat(element),
      []
    );
  let result = 0;
  for (i = 0; i < matrixNew.length; i++) {
    if (matrixNew[i] === '^^') result = result + 1;
  }
  return result;
};
