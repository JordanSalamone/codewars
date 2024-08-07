// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let newArr = []
    for(let i = 1; i <= size; i++){
        for(let j = 1; j <= size; j++){
            newArr.push(j * i)
        }
    }
    let result = []
    console.log(newArr)
    for(let i = 0; i < size; i++){
        result.push(newArr.slice(i * size, i * size + size))
    }
    return result
}


console.log(multiplicationTable(5))
  




// other solutions

multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
  }