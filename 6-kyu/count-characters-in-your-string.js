// //// 6
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    let counted = {}

    if(string !== undefined){
        for(let i = 0; i < string.length; i++){
            if(counted[string[i]] === undefined){
                counted[string[i]] = 1
            }else{
                counted[string[i]] += 1
            }
        }
        return counted
    }

    return {};
}

console.log(count())


// other solutions

function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }


  function count (string) {
    return string.split('').reduce(function(counts,char){
      counts[char] = (counts[char]||0) + 1;
      return counts;
    },{});
  }