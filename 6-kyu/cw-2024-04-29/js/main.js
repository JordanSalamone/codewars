// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// examples:
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year){
    let arr = year.split('')
    let century = ''

    if(+arr[2] === 0 && +arr[3] === 0){
        century = arr.slice(0 , 2).join('')
    }else{
        century = (+(arr[0] + arr[1]) + 1).toString()
    }

    if(+century.charAt(0) > 1 && +century.charAt(1) === 1){
        return century + 'st'
    }else if(+century.charAt(0) > 1 && +century.charAt(1) === 2){
        return century + 'nd'
    }else if(+century.charAt(0) > 1 && +century.charAt(1) === 3){
        return century + 'rd'
    }else{
        return century + 'th'
    } 
}

console.log(whatCentury("1999"))


// solution

function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}