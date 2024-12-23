// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let lengths = [],
        result = 0
    for(let i = 0; i < array.length; i++){
        lengths.push(array[i].toString().length)
    }
    let longest = lengths.sort((a,b) => b - a)[0]
    for(let i = 0; i < array.length; i++){
        array[i].toString().length === longest ? result += array[i] : result = 0
    }
    return result
}

console.log(findLongest([9000, 8, 800]))