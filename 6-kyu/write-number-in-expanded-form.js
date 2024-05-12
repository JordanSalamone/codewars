// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    num = `${num}`
  // if the number is 10 or less
    if(num < 11){
      return num
    }
  // if the number is 11 or greater
    else{
      let r = ''
      
      if(num[num.length - 1] > 0){
        r = num[num.length - 1]
        // make the number an array and iterate
        num = num.split('') 
        for(let i = 0; i < num.length; i++){
          if(num[i] > 0 && i < (num.length - 1)){
            r = `${num[i]}` + '0'.repeat(num.length - i - 1) + ' + ' + r
          }
        }
      return r.split(' + ').sort((a,b) => b - a).join(' + ')
      }
      
      else{
        num = num.split('') 
        for(let i = 0; i < num.length; i++){
          if(num[i] > 0 && i < (num.length - 1)){
            r = `${num[i]}` + '0'.repeat(num.length - i - 1) + ' + ' + r
          }
        }
        r = r.slice(0, r.length - 3)
      return r.split(' + ').sort((a,b) => b - a).join(' + ')
      }
    }
  }
  
  // console.log(expandedForm(23740))
  expandedForm(482) //returns '40 + 2'
  expandedForm(70350) //returns '70000 + 300 + 50'
  
  
  // other solutions
  
  function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
  }
  
  
  const expandedForm = n => n.toString()
                              .split("")
                              .reverse()
                              .map( (a, i) => a * Math.pow(10, i))
                              .filter(a => a > 0)
                              .reverse()
                              .join(" + ");