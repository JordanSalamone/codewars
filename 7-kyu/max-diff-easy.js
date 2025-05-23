// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

function maxDiff(list) {
    let sort = list.sort((a,b) => a - b),
        result = sort[sort.length - 1] - sort[0]
    return list.length <= 1 ? 0 : result
};

console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]))