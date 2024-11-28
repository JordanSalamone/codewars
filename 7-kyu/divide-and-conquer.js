// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let integers = x.filter(item => Number.isInteger(item))
        string = x.filter(item => !Number.isInteger(item))
    integers.reduce((a,c) => a += c, 0)
    string.reduce((a,c) => a += +c, 0)

}

divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])