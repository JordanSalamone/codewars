// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
    let result = a.filter(item => item > limit)
    if(result[0] > limit){
        return false
    }else{
        return true
    }
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))



// other solutions

function smallEnough(a, limit){
    return Math.max(...a) <= limit
}



smallEnough = (a, l) => a.every(e => e <= l)