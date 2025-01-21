// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

let Ghost = function() {
    const arr = ['white', 'yellow', 'purple', 'red'];
    return arr[Math.random().toString(5).substr(2, 5)]
};