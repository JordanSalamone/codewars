// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

function greet(name){
    let n = name.split('').map(a => a == name[0] ? a.toUpperCase(): a.toLowerCase()).join('')
    return `Hello ${n}!`
}

greet('JORDAN')



// other solutions
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};