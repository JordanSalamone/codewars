// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
    let codes = [97, 101, 105, 111, 117],
        result = []
    for(let i = 0; i < a.length; i++){
        if(codes.includes(a[i])){
            result.push(String.fromCharCode(a[i]))
        }else{
            result.push(a[i])
        }
    }
    return result
}




// other solution

function isVow(a){
    for (var i=0, l=a.length; i<l; ++i)
    {
      var char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
}