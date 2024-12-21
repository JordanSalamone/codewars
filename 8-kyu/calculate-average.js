// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(array) {
    return array[0] > 0 ? array.reduce((acc, cur) => acc += cur, 0) / array.length : 0;
}




// other solution
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}