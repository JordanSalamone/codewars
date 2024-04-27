// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    return x.reduce((acc, c) => acc += Number(c), 0)
}

// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])


// solution

const sumMix=x=>x.reduce((a,b)=>+b+a,0)