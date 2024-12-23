// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    let lengths = [],
        result = 0
    for(let i = 0; i < array.length; i++){
        lengths.push(array[i].toString().length)
    }
    let sorted = lengths.slice().sort((a,b) => b - a)[0],
        longest = lengths.indexOf(sorted);
    return array[longest]
}

console.log(findLongest([1, 10, 200]))




// other solutions 
const findLongest = l => l.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);