// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// function zero(a) {
//     return 0
// }
// function one(a) {
//     return 1 + a
// }
// function two(a) {
//     return a % 1 === 0 ? 2 : `2 + ${a}`
// }
// function three(a) {}
// function four(a) {}
// function five(a) {}
// function six(a) {}
// function seven(a) {}
// function eight(a) {}
// function nine(a) {}

// function plus(a) {
//     return `+ ${a}`
// }
// function minus(a) {
//     return `- ${a}`
// }
// function times(a) {
//     return `* ${a}`
// }
// function dividedBy(a) {
//     return `/ ${a}`
// }






// other solutions
const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

const plus = a => b => a + b
const minus = a => b => b - a
const dividedBy = a => b => Math.floor(b / a)
const times = a => b => a * b

console.log(one(plus(two())))