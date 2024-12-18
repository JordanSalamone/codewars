// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:

// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:

// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

// Example:

// With the above data your function gps(s, x) should return 74

// Note

// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

//  (3600 * delta_distance) / s.



// incorrect:

// function gps(s, x) {
//     let avg = []
//     for(let i = 1; i < x.length; i++){
//         avg.push(Math.floor(x[i] - x[i - 1] * 3600 / s))
//     }
//     console.log(avg)
//     return Math.max(Math.abs(...avg)) < 1 ? 0 : Math.max(Math.abs(...avg))
// }

gps(12, [0.0, 0.24, 0.48, 0.72, 0.96, 1.2, 1.44, 1.68, 1.92, 2.16, 2.4])




// other solutions
const gps = (s, x) => {

    if (x.length<=1) {
      return 0;
    }
    
    let output = [];
    for (let i = 0; i < x.length-1; i++) { 
      output.push((x[i+1]-x[i])*3600/s);
    }
    
    return Math.max(...output);
}





function gps(s, x) {
    let distArr = x.map((point, index) =>{
        if(point == x[0]) return point
        return x[index] - x[index-1]
    });
    if(distArr.length != 0){
        return Math.floor((3600 * Math.max(...distArr)) / s);
    }
    return 0;
}