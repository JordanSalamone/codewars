// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let repeatedStr = ''
    for(let i = 0; i < str.length; i++){
        repeatedStr += str[i].repeat(2)
    }
    return repeatedStr
  }
 
// console.log(doubleChar("illuminati"))


// solution
const doubleChar = (str) => str.split("").map(c => c + c).join("");