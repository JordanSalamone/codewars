// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    const vowels = 'aeuio'
    return string.split('').filter(letter => !vowels.includes(letter)).join('')
}

console.log(shortcut('How are you today?'))




// other solutions

function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
}