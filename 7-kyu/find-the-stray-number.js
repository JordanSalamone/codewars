// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let result = []
    for(let i = 0; i < numbers.length; i++){
        let copy = numbers.slice()
            item = copy.splice(i, 1)
        if(!copy.join().includes(item)){
            result += item
        }
    }
    return +result
}

stray([1, 2, 1, 1, 1])




// Correct solutions

function stray(numbers) {
    var a = numbers.sort();
    
    if(a[0] != a[1]) {
      return a[0]
    } 
    return a[a.length-1]
}


// &

const stray = nums => nums.reduce((a, b) => a ^ b);
