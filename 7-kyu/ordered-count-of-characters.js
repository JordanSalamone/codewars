// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
    let arr = [];
    for (let i = 0; i < text.length; i++){
       let k = 0;
       for(let j = 0; j < arr.length; j++)
          if(arr[j][0] == text[i]){
            k++;
          }
        if(k == 0){
          for(let j = i; j < text.length; j++)
            if(text[j] == text[i])
               k++;
            arr.push([text[i], k]);
         }
    }
    return arr;
}






// // other solutions


// const orderedCount = s =>
//     Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));


// var orderedCount = function (text) {
//     return Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g')).length]);
//   }