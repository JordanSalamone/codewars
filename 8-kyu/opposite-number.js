// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    return number >= 0 ? number * -1 : Math.abs(number)
}




// other solutions
function opposite(number) {
    return(-number);
}