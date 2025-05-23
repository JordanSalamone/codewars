// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// Examples

// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4

function quadrant(x, y) {
    switch(true){
        case x > 0 && y > 0 : return 1
        case x < 0 && y > 0 : return 2
        case x < 0 && y < 0 : return 3
        case x > 0 && y < 0 : return 4
    }
}




// easier solution
function quadrant(x, y) {
    if (x > 0 && y > 0) return 1;
    if (x < 0 && y > 0) return 2;
    if (x < 0 && y < 0) return 3;
    return 4;
}