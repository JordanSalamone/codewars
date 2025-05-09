// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples

// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
const isAnagram = function(test, OG) {
    let sortTest = test.toLowerCase().split('').sort().join(''),
        sortOG = OG.toLowerCase().split('').sort().join('');
    return sortTest === sortOG
};

console.log(isAnagram("Buckethead", "DeathCubeK"))
