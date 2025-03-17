// The number n is Evil if it has an even number of 1's in its binary representation.
// The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

// The number n is Odious if it has an odd number of 1's in its binary representation.
// The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

// You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

// good luck :)

function evil(n) {
    let bin = (n >>> 0).toString(2),
        split = bin.split(''),
        result = 0

    for(let i = 0; i < split.length; i++){
        if(split[i] == 1){
            result += 1
        }
    }

    return result % 2 === 0 ? "It's Evil!" : "It's Odious!"
}

evil(19)




// other solutions
function evil(n) {
    return n.toString(2).match(/1/g).length % 2 ? 'It\'s Odious!' : 'It\'s Evil!';
}