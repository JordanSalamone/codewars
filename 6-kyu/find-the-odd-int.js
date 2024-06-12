// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    const occurrences = A.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }, {});
    let count = Object.values(occurrences),
        result = Object.keys(occurrences),
        indexOf1 = count.findIndex(item => item%2 !== 0);
      
    return Number(result[indexOf1])
}

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])




// other solutions

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);



function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }