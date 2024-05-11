// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
    y = x.toLowerCase();
    return y === y.split('').reverse().join('')
  }
  
  
  // other solutions
  
  const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }
  
  
  function isPalindrome(x, str = x.toLowerCase()) {
    return str === [...str].reverse().join('')
  } 