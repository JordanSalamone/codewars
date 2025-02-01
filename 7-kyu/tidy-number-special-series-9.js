// Definition

// A Tidy number is a number whose digits are in non-decreasing order.

// Task

// Given a number, Find if it is Tidy or not .

// Warm-up (Highly recommended)

// Playing With Numbers Series

// Notes

// Number passed is always Positive .

// Return the result as a Boolean

function tidyNumber(n){
    let alt = n.toString().split('').map(Number)
    return alt.join() === alt.sort().join()
}

console.log(tidyNumber(9672))





// other solutions
function tidyNumber(n){
    return [...n + ''].sort().join('') == n;
}