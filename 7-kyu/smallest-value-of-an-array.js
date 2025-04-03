// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// Some examples:

// ([1,2,3,4,5], "value") should return 1
// ([1,2,3,4,5], "index") should return 0

function min(arr, toReturn) { 
    let sorted = [...arr].sort((a, b) => a - b);
    if(toReturn === "value") return sorted[0];
    else return arr.indexOf(sorted[0]);
}