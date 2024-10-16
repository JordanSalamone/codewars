// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples

// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"


function remove(s,n){
    let arr = s.split(''),
        num = n,
        result = [];
    for(let i = 0; i < arr.length; i++){
        if(num > 0 && arr[i] == '!'){
            num--
        }else{
            result.push(arr[i])
        }
    }
    return result.join('')
}

console.log(remove("!Hi! Hi!",1))