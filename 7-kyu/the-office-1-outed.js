// Your colleagues have been looking over your shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object ( meet ) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room ( boss ). Their score is worth double its face value (but they are still just one person!).

function outed(meet, boss){
    let ratings = []
    for(let x in meet){
        ratings.push(meet[x])
    }
    return (ratings.reduce((acc, cur) => acc += cur, 0) / meet.length) <= 5 ? 'Get Out, Now!' : 'Still working'
}