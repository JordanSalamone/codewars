// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

function checkExam(arr1, arr2) {
    let score = 0
    for(let i = 0; i < arr2.length; i++){
      if(arr2[i] === arr1[i]){
        score += 4
      }else if(arr2[i] === ''){
        score += 0
      }else{
        score -= 1
      }
    }

    if(score < 0){
       return 0
    }
    return score;
   }




// other solutions

function checkExam(array1, array2) {
    const reducer = (a, e, idx) => {
      if (e === "") {
        return a;  
      }
      
      if (e === array1[idx]) {
        return a += 4;
      }
      
      return --a;
    }
    const score = array2.reduce(reducer, 0);
    return score < 0 ? 0 : score;
  }