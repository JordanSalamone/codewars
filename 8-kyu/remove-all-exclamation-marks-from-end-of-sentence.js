// Remove all exclamation marks from the end of sentence.

// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(string) {  
    let str = string.split('')
    while(str[str.length - 1] == '!'){
        str.pop()
    }
    return str.join('');
}