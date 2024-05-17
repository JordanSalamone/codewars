// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


// Incomplete :
function validatePIN (pin) {
    pin = pin.split('').map(c => +c)
    console.log(pin)
    
    if(pin.length === 4 || pin.length === 6){
            pin = pin.split('').map(c => +c)
            if(pin.every(Boolean) === true){
              return true
            }
        }else{
            return false
        }
    }

  console.log(validatePIN('-1.234'))

// other solutions

function validatePIN (pin) {
    //return true or false
      var n = pin.length;
    if( n != 4 && n != 6)
            return false;
    for (var i in pin)
            if (pin[i] > '9' || pin[i] < '0')
                return false;
    return true;
  }