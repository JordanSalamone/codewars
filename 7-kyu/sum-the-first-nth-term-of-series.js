// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// 1
// +
// 1
// 4
// +
// 1
// 7
// +
// 1
// 10
// +
// 1
// 13
// +
// 1
// 16
// +
// …
// Series:1+ 
// 4
// 1
// ​	
//  + 
// 7
// 1
// ​	
//  + 
// 10
// 1
// ​	
//  + 
// 13
// 1
// ​	
//  + 
// 16
// 1
//  +…


// You will need to figure out the rule of the series to complete this.

// Rules

// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)

// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
    // f for fraction
    let f = 4,
        result = 1
    for(i = 1; i < n; i++){
        result += 1/f
        f += 3
    }
    return n == 0 ? '0.00' : result.toFixed(2)
}

console.log(SeriesSum(4))



// other solutions
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
}