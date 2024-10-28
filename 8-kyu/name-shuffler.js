// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    let result = str.split(' ')
    return result[1] + ' ' + result[0]
}

console.log(nameShuffler('Brody Tidwell'))




// other solutions
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
}