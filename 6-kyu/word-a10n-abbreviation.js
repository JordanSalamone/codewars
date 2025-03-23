// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
// Example

// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

function abbreviate(string) {
    var na = /([^a-z])/i;                                                                      // 1 
    var ss = string.split(na);                                                                 // 2
    return ss
      .map(function(element) {                                                                 // 3
        if (element.length >= 4) {                                                             // 4
           return element = "" + element[0] + (element.length-2) + element[element.length-1];
        }                                                                                      // 5
        else return element                                                                    // 6
      })
      .join(separator = "")                                                                    // 7
  }
  
  /*1: Set up a remembered non-alphabetical delimiter for string.split(), 
    2: and split the input string along this delimiter, returning an array of strings.  
    3: For each element in the array of split input strings,
    4: If the length of that element (string) is >= 4 characters,
    5: Set that element to be an abbreviated version of itself.
    6: If the length of the element is not >=4, return the element as found.
    7: Finally, join all elements together, and return ss */

abbreviate("elephant-rides are really fun!")





// other solution
function abbreviate(string) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    let spacers = []
    string =  string.split('').map((char, i, arr) => {
      if(abc.includes(char.toLowerCase())) return char
      else {
        spacers.push([char, i])
        return ' '
      }
    }).join('').split(' ').map(word => {
      if(word.length <= 3) return word
      else return word.slice(0,1) + (word.length - 2) + word.slice(word.length - 1, word.length)
    })
    if(string.length > 1) {
      for(let i = 0, j = 1; j < string.length; i ++, j += 2) {
        string.splice(j, 0, spacers[i][0])
      }
    }
    return string.join('')
}