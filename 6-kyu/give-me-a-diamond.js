// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples

// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n){
    if (n < 0 || !(n % 2)) return null; 
    const middleIndex = Math.floor(n / 2);
    
    return Array.apply(null, {length: n})
        .map((el, index) => {
          const indentation = Math.abs(index - middleIndex);
          const numberOfAsterisks = n - indentation * 2;
          return Array(indentation + 1).join(' ') + Array(numberOfAsterisks + 1).join('*');
        })
        .join('\n') + '\n';
  }


console.log(diamond(3))