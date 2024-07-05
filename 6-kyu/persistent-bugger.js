// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

function persistence(num) {
    let count = 0,
        product = num;
    while(product > 9){
        product = multiplyDigits(product)
        count++
    }
    return count
 }

 function multiplyDigits(n){
    n = n.toString().split('')
    let result = 1
    for(let i = 0; i < n.length; i++){
        result *= Number(n[i])
    }
    return result
 }

 console.log(persistence(25))



 
// other solutions

function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }



 function persistence(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
 }