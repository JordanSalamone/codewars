// Task

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a,b]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples

// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range 
// [a,b]
// [a,b] the function should output an empty list:

// 90, 100 --> []

function sumDigPow(a, b) {
    let result = [];
    let sum = 0;
    for(let i = a; i <= b; i++){
        num = i.toString()
        if(i < 10){
            sum = 0;
            result.push(i)
        }else if(i < 100){
            sum = Number(num.charAt(0)) + (Number(num.charAt(1)) ** 2)
        }else if(i < 1000){
            sum = Number(num.charAt(0)) + (Number(num.charAt(1)) ** 2) + (Number(num.charAt(2)) ** 3)
        }else if(i < 10000){
            sum = Number(num.charAt(0)) + (Number(num.charAt(1)) ** 2) + (Number(num.charAt(2)) ** 3) + (Number(num.charAt(3)) ** 4)
        }else if(i < 100000){
            sum = Number(num.charAt(0)) + (Number(num.charAt(1)) ** 2) + (Number(num.charAt(2)) ** 3) + (Number(num.charAt(3)) ** 4) + (Number(num.charAt(4)) ** 5)
        }else if(i < 1000000){
            sum = Number(num.charAt(0)) + (Number(num.charAt(1)) ** 2) + (Number(num.charAt(2)) ** 3) + (Number(num.charAt(3)) ** 4) + (Number(num.charAt(4)) ** 5) + (Number(num.charAt(5)) ** 6)
        }else if(i < 10000000){
            sum = Number(num.charAt(0)) + (Number(num.charAt(1)) ** 2) + (Number(num.charAt(2)) ** 3) + (Number(num.charAt(3)) ** 4) + (Number(num.charAt(4)) ** 5) + (Number(num.charAt(5)) ** 6) + (Number(num.charAt(6)) ** 7)
        }

        if(sum == i){
            result.push(Number(i))
        }
    }
    return result
}

// console.log(sumDigPow(1900000, 3250340)) 





// other solutions

function sumDigPow(a, b) {
    var arr = [];
    for (var i = a; i <= b; i++) {
      var sum = 0;
      for (var j = 0; j <= String(i).length; j++) {
        sum += Math.pow(parseInt(String(i)[j]), j+1);  
        if (sum == i) arr.push(i);
      }
    }
    return arr;
  }