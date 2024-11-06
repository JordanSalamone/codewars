// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    return s.split('').map(x => 'aeiouAEIOU'.includes(x) ? '!' : x).join('')
}

console.log(replace('Heya!'))




// other/regex solution
function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
}