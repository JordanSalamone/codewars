// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
  if(b.length == 0){
    return a 
   }else if(a.length == 0){
    return []
   }else{
    return a.filter(item => !b.includes(item))
   } 
}

console.log(arrayDiff([1,2,3,3,1], [3]))



// solution

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}