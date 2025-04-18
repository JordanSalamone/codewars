// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement a function returning the number of red beads.
// If there are less than 2 blue beads return 0.

function countRedBeads(n) {
    let result = 0
    for(let i = 0; i <= n; i++){
        if(i >= 2){
            result += 2
        }
    }
    return result
}