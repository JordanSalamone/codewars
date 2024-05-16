// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

const isUpperCase = str => str === str.toUpperCase();
const isLetter = str => str.toUpperCase() != str.toLowerCase();

function rot13(message){
    let lower = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let chari
    let cipher = ''

    for(let i = 0; i < message.length; i++){
        if(!isLetter(message.charAt(i))){
            cipher += message.charAt(i)
        }else if(isUpperCase(message.charAt(i))){
            chari = message.charAt(i)
            cipher += upper.charAt(upper.indexOf(chari) + 13)
        }else{
            chari = message.charAt(i)
            cipher += lower.charAt(lower.indexOf(chari) + 13)
        }
    }
    return cipher
}

console.log(rot13('Testing!'))
rot13('I want your love, sir')
rot13('help me')





// other solutions

function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }




function rot13(message){
    return message.split('').map(l => {
      let charCode = l.charCodeAt(0);
      if(charCode >= 97 && charCode <= 122){
        charCode = (charCode - 97 + 13) % 26 + 97;
      }
      else if(charCode >= 65 && charCode <= 90){
        charCode = (charCode - 65 + 13) % 26 + 65;
      }
      return String.fromCharCode(charCode);
    }).join('');
  }




var codeA = 'A'.charCodeAt(0),
    codeZ = 'Z'.charCodeAt(0),
    codea = 'a'.charCodeAt(0),
    codez = 'z'.charCodeAt(0);
function rot13(message){
return message.split('').map(function(char) { 
  var code = char.charCodeAt(0);
  if(codeA <= code && code <= codeZ){
    return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
  } else if(codea <= code && code <= codez){
    return String.fromCharCode(((code - codea) + 13) % 26 + codea);
  }
  return char;
}).join('');
}