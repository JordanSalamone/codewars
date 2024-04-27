// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

function addBinary(a,b) {
    let sum = a + b
    let total = sum.toString(2)
    return ''+total
  }
//   console.log(addBinary(1,7))


// Solution 
function addBinary(a,b){
    return (a+b).toString(2)
  }