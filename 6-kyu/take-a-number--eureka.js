// The number 
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
// 89
// =
// 8
// 1
// +
// 9
// 2
// 89=8 
// 1
//  +9 
// 2
 

// The next number in having this property is 
// 135
// 135:

// See this property again: 
// 135
// =
// 1
// 1
// +
// 3
// 2
// +
// 5
// 3
// 135=1 
// 1
//  +3 
// 2
//  +5 
// 3
 

// Task

// We need a function to collect these numbers, that may receive two integers 
// a
// a, 
// b
// b that defines the range 
// [
// a
// ,
// b
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples

// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [
// a
// ,
// b
// ]
// [a,b] the function should output an empty list.

// 90, 100 --> []

function sumDigPow(a, b) {
    let result = []
    for(let i = a; i <= b; i++){
        if(i < 10){
            result.push(i)
        }else if(i < 100){
            if((Number(i.toString().charAt(0)) + Number(Math.pow(i.toString().charAt(1), 2))) === i){
                result.push(i)
            }
        }else if(i < 1000){
            if((Number(i.toString().charAt(0)) + Number(Math.pow(i.toString().charAt(1), 2)) + Number(Math.pow(i.toString().charAt(2), 3))) === i){
                result.push(i)
            }
        }else if(i < 10000){
            if((Number(i.toString().charAt(0)) + Number(Math.pow(i.toString().charAt(1), 2)) + Number(Math.pow(i.toString().charAt(2), 3)) + Number(Math.pow(i.toString().charAt(3), 4))) === i){
                result.push(i)
            }
        }else if(i < 100000){
            if((Number(i.toString().charAt(0)) + Number(Math.pow(i.toString().charAt(1), 2)) + Number(Math.pow(i.toString().charAt(2), 3)) + Number(Math.pow(i.toString().charAt(3), 4)) + Number(Math.pow(i.toString().charAt(4), 5))) === i){
                result.push(i)
            }
        }else if(i < 1000000){
            if((Number(i.toString().charAt(0)) + Number(Math.pow(i.toString().charAt(1), 2)) + Number(Math.pow(i.toString().charAt(2), 3)) + Number(Math.pow(i.toString().charAt(3), 4)) + Number(Math.pow(i.toString().charAt(4), 5)) + Number(Math.pow(i.toString().charAt(5), 6))) === i){
                result.push(i)
            }
        }else if(i < 10000000){
            if((Number(i.toString().charAt(0)) + Number(Math.pow(i.toString().charAt(1), 2)) + Number(Math.pow(i.toString().charAt(2), 3)) + Number(Math.pow(i.toString().charAt(3), 4)) + Number(Math.pow(i.toString().charAt(4), 5)) + Number(Math.pow(i.toString().charAt(5), 6)) + Number(Math.pow(i.toString().charAt(6), 7))) === i){
                result.push(i)
            }
        }
    }
    return result
}

console.log(sumDigPow(290, 2999))



// other solution

function filterFunc(n) {
    return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
  }
  
        function *range(a, b) {
          for (var i = a; i <= b; ++i) yield i;
        }

                function sumDigPow(a, b) {
                  return Array.from(range(a, b)).filter(filterFunc);
                }


// another solutions

const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89,135, 175, 518, 598, 1306, 1676, 2427, 2646798];

  const sumDigPow = (a, b) => EUREKAS.filter( (n) => a <= n && n <= b );


  

function sumDigPow(a, b) {
    let result_arr = [];
        for (let i = a; i < b + 1; i++) {
                let result = 0;
                let string = i.toString();
                for (let k = 0; k < string.length + 1; k ++){
                    result = result +  Math.pow(string.charAt(k), k + 1);
                }
                if (result === i ){
                        result_arr.push(result);
                    }
            }		
        
        return result_arr;
    }