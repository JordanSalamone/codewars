// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output

// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data){
    let arr = [];
    for(let i = 0; i < data.length; i++){
        if(Number(data[i][0]) >= 55 && Number(data[i][1] > 7)){
            arr.push('Senior')
        }else{
            arr.push('Open')
        }
    }
        return arr
}

// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))



// solution

function openOrSenior(data){
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
}