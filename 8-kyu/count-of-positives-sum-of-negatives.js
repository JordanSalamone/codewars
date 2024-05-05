// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(nums){
    if(nums == [] || nums == null){
      return []
    }else{
      let p = 0
      for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
          p += 1
        }
      }
      
      let n = nums.filter(num => num < 0).reduce((acc,c) => acc + c, 0);
    
      if(p > 0 || n < 0){
        return [p, n]
      }else{
        return []
      } 
    }
  }
  
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
  
  // other solutions
  function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}


function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}


function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length) return [];
    return input.reduce((arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    }, [0, 0]);
  }