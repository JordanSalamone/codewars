// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Input

// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output

// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note

// If you are given an array with multiple answers, return the lowest correct index.

function findEvenIndex(arr){
    let result = ''
    
    for(let i = 0; i < arr.length; i++){
      let left = arr.slice(0, i);
      let right = arr.slice(i + 1, arr.length);
      if(left.reduce((acc, c) => acc + c, 0) === right.reduce((acc, c) => acc + c, 0)){
          result = i
      }
    }
    if(typeof(result) === 'number'){
      return result
    }else{
      return -1
    }
  }
  // console.log(findEvenIndex([0,2,0,2,0]))
  
  // other solutions
  function findEvenIndex(arr)
  {
    var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
    for(var i = 0; i < arr.length; i++) {
        if(i > 0) left += arr[i-1];
        right -= arr[i];
        
        if(left == right) return i;
    }
    
    return -1;
  }
  
  
  function findEvenIndex(arr)
  {
    function sum(arr){
      return arr.reduce(function(a,b){return a+b;},0);
    }
  
    return arr.findIndex(function(el,i,arr){
      return sum(arr.slice(0, i)) === sum(arr.slice(i+1,arr.length));
    });
  }