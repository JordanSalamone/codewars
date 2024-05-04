// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
word = word.toLowerCase()
let duplicate = '';
let newWord = '';
let result = '';
    for(let i = 0;i < word.length; i++){
      if(newWord.includes(word[i])){
        duplicate += word[i]
      }else{
        newWord += word[i]
      }
    }
    for(let i = 0;i < word.length; i++){
      if(duplicate.includes(word[i])){
        result += ')'
      }else{
        result += '('
      }
    }
  return result
}

console.log(duplicateEncode("Success"))


// other solutions
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }


// recursive option
function countCharacters(chars) {
    return chars
      .reduce( function(memo, char){
        memo[char] = memo[char] ? memo[char] + 1 : 1;
        return memo;
      }, {});
  }
  
  function duplicateEncode(word){
    const chars = word.split('').map(ch => ch.toLowerCase());
    const charsCount = countCharacters(chars);
    return chars
      .map( ch => charsCount[ch] > 1 ? ')' : '(' )
      .join('');
  }