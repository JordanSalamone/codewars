// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers

function evenOrOdd(number) {
  return number%2 === 0 ? 'Even' : 'Odd'
}



// other solutions

function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    }
    else {
      return "Odd"
    }
  }