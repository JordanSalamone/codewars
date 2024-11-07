// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    // find all odd nums in array and make new arr
    let oddArr = array.filter(x => x%2 !== 0).sort((a, b) => a - b),
        newArr = [];
    // sort that oddArr
    // loop original array and if num is odd push num from oddArr to newArr
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 !== 0){
            newArr.push(oddArr.shift())
        }else{
            newArr.push(array[i])
        }
    }
    // return newArr
    return newArr
}

console.log(sortArray([3, 11, 2, 8, 1, 4, 5]))




// other solution
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}