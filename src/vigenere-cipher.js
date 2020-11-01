const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  encrypt (str, key, mode) {
  var output = [str.length];
  var result = 0;
  var output_str;

  for (var i = 0; i < str.length; i++) {
    if (mode == 1) {
      result = ((str.charCodeAt(i) + key.charCodeAt(i % key.length)) % 128);
      output[i] = String.fromCharCode(result);
      console.log( 
      str[i],key[i],result,output[i])

    } else if (mode == 0) {
      if (str.charCodeAt(i) - key.charCodeAt(i % key.length) < 0) {
        result = (str.charCodeAt(i) - key.charCodeAt(i % key.length)) + 128;
      } else {
        result = (str.charCodeAt(i) - key.charCodeAt(i % key.length)) % 128;
      }
      output[i] = String.fromCharCode(result);
    }

  }
  output_str = output.join('');
  return output_str;
  }    
  decrypt(cipher, key) {
    let lang = "en";
    if (lang !== "ru" && lang !== "en" || cipher.length !== key.length) return false;
    var s = "";
    for (var i = 0; i < cipher.length; i++) {
        var row = this[lang].indexOf(key[i])
            coll = this.square[row].indexOf(cipher[i]);
        s += this[lang][coll];
    }
    return s;
  }
}

module.exports = VigenereCipheringMachine;
