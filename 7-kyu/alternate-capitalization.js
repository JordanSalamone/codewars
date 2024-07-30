// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
    let odd = '',
        even = '';
    for(let i = 0; i < s.length; i++){
        if(i%2 === 0){
            odd += s[i].toUpperCase()
            even += s[i]
        }else{
            odd += s[i]
            even += s[i].toUpperCase()
        }
    }
    let result = [odd, even];
    return result
}

capitalize("codewars")





// other solutions

function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };