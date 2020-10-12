const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let arrayСapitalLetter = '';
  for (var i = 0; i < members.length; i++) {
    let element = members[i];
    if (typeof(element) === "string") {
      arrayСapitalLetter += element.trim()[0].toUpperCase();
    }
  }
  let result = arrayСapitalLetter.split('');
  let resultSort = result.sort();
  return resultSort.join('');
};
