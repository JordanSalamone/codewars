// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
    let result = '',
        odd = '13579'
        n = Math.abs(num).toString();

    for(let i = 0; i < n.length; i++){
        if(odd.includes(n[i]) || odd.includes(n[i+1])){
            result += `${n[i]}-`
        }else{
            result += n[i]
        }
    }
    return result[result.length - 1] == '-' ? result.slice(0, result.length - 1) : result
}

console.log(dashatize(-28369))





// other solutions\
function dashatize(num) {
    return String(num)
      .replace(/([13579])/g, "-$1-")
      .replace(/--+/g, "-")
      .replace(/(^-|-$)/g, "")
};


function dashatize(num) {
    return num = num.toString().split("").map(function(c){
      return c % 2 ? "-" + c + "-" :  c ;
    }).join("").split("-").filter(a => a != "").join("-");
    
};