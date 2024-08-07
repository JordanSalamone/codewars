// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:

// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)



function remainder(n, m){
    if(n > m){
        return n%m
    }else if(n < m){
        return m%n
    }else if(n === 0 || m === 0){
        return NaN
    }else{
        return 0
    }   
}



// other solutions

function remainder(a, b){
    return a > b ? a % b : b % a;
  }