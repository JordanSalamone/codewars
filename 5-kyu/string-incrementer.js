// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


////// DOES NOT WORK WITH NUMBERS IN THE MIDDLE OF THE STRING:
function incrementString (str) {
    // create string with only letters and zeroes and create another with only numbers above 0
    // if no numbers, apend 1 to end of string
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let num = [...str].filter(e => !letters.includes(e)).join(''),
        word = [...str].filter(e => letters.includes(e)).join(''),
        oneOrHigher = [...str].findIndex(e => e >= 1),
        addToNum = [Number(num) + 1].toString(),
        zeroes = [...str].splice(0, oneOrHigher).join('')

    if(hasNumber(str) && str[str.length-1] > 0){
        let result = zeroes + addToNum
        if(result.length > str.length){
            let newResult = [...zeroes].slice(0, zeroes.length - 1).join('')
            if(!newResult.includes(word)){
                return word + addToNum
            }else{
                return [...zeroes].slice(0, zeroes.length - 1).join('') + addToNum
            }
        }else{
            return result
        }
    }else if(hasNumber(str)){
        return [...str].slice(0, str.length - 1).join('') + '1'
    }else{
        return str + '1'
    }
}
//   returns true if string has number
function hasNumber(myString) {
    return /\d/.test(myString);
}

incrementString('foobar0999')




////// REAL SOLUTION *******

function incrementString (str) {
    str = str.split('');
    if (isNaN(str[str.length - 1]) === false) {
      for (var i = str.length - 1; i >= 0; --i) {
        if (isNaN(str[i]) === false) {
          var num = +str[i];
          if (num !== 9) {
            str.splice(i, 1, (++num).toString());
            break;
          }
          str.splice(i, 1, '0');
        } else if (isNaN(str[i + 1]) === false && str[i + 1] === '0') {
          str.splice(i + 1, 0, '1');
        } else {
          break;
        }
      }
    } else {
      str.push('1');
    }
    return str.join('');
  }



// using Switch/Case
function incrementString(str){
	var c = str[str.length-1];
		switch(c){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
            case '9': return incrementString(str.substring(0, str.length-1)) + 0;
            default: return str+"1";
                }
}



// using REGEX
function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
  }