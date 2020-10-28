const CustomError = require("../extensions/custom-error");

const chainMaker = {
  this: chains = [],
  getLength() {
    let resultLength = this.chains.length;
    chains = [];
    return resultLength;
  },
  addLink(value) {
    chains.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > chains.length || position <= 0) {
      chains = [];
      throw Error;
    }
   chains.splice(position-1, 1);
   return this;
  },
  reverseChain() {
    chains.reverse();
    return this;
  },
  finishChain() {
    let str = chains.join(' )~~( ');
    let result = "( " + str +" )";
    chains = [];
    return result;
  }
};

module.exports = chainMaker;
