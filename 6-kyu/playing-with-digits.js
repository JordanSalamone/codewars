// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

// (ap+bp+1+cp+2+dp+3+...)=n∗k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:

// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p){
    let c = 0,
    newN = n.toString(),
    result = 0;

    const num = Number(n);

    for(let i = p; c < newN.length; i++){
        result += Math.pow(Number(newN[c]), i)
        c++
    }

    if(result%num === 0){
        return result/num
    }else{
        return -1
    }
}
console.log(digPow(46288, 3))





// other solutions

function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
}



  function digPow(n, p){
    // ...
    var num1=n.toString();
    var num2=p.toString();
    var sum=0;
    
    for(var i=0;i<num1.length;i++){
      sum=sum+Math.pow(parseInt(num1.charAt(i)),p);
      p++;
      if(sum%n==0){return sum/n;}
    }
    return -1;
    
    
  }