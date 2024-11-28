// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let integers = x.filter(item => Number.isInteger(item)).reduce((a,c) => a += c, 0)
        string = x.filter(item => !Number.isInteger(item)).reduce((a,c) => a += +c, 0)
    return integers - string
}

console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))





// other solutions

function divCon(x){
    const strings = x.filter(n => typeof n === 'string')
    const nums = x.filter(n => typeof n === 'number')
    
    const strSum = strings.reduce((acc, str) => acc += +str, 0)
    const numSum = nums.reduce((acc, str) => acc += str, 0)
  
    return numSum - strSum
}