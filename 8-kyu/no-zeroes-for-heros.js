// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(x) {
    let a = `${x}`.split('');
    for(let i = a.length -1; i >= 0; i--){
      if (a[i] == 0){
          a.pop()
      }else{
          break
      }
    }
  return Number(a.join(''))
  }

console.log(noBoringZeros(140500))





// other solutions

function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
}


function noBoringZeros(n) {
    return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}