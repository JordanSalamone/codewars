// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6

function add(n) {
//   find how to use a function within a function and what in the world the question is asking
    function add(n2){
        return n + n2
    }
}
