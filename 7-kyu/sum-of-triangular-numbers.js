// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

function sumTriangularNumbers(n) {
    let result = 0,
        arr = [],
        add = 2;
    for(let i = 0; i < n; i++){
        if(i == 0){
            result++ 
        }else{
            result += add
            add++ 
        }
        arr.push(result)
    }
    return n < 0 ? 0 : arr.reduce((acc, cur) => acc += cur, 0)
}

console.log(sumTriangularNumbers(4))







// other solutions

function sumTriangularNumbers(n) {
    return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
}



function sumTriangularNumbers(n) {
    if  (n < 0){
    return 0;
    }
    else  {
      return n*(n+1)/2 + sumTriangularNumbers(n-1);
    }
}