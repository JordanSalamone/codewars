// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
	let result = []
    word.split('').forEach((element, i) => {
        if(element === element.toUpperCase()){
            result.push(i)
        }
    });
    return result
};

console.log(capitals('CodEWaRs'))




// other solutions
var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};