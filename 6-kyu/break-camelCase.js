// 6


// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let result = '';
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i].toLowerCase()){
            result += string[i]
        }else{
            result += ' ' + string[i]
        }
    }
    return result
}

console.log(solution("camelCasingTest"))



// other solution

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
}