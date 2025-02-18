// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
    let result = '',
        split = str.split('')
    for(let i = 0; i < str.length; i++){
        if(i === 0){
            result += str[i].toLowerCase()
        }else if(isNaN(split[i])){
                split[i] === split[i].toUpperCase() ? result += '-' + str[i].toLowerCase() : result += str[i]
        }
    }
    return result
}