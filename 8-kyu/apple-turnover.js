// 8

// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

function apple(x){
    +x*+x > 1000 ? `It's hotter than the sun!!` : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}


// other solutions
function apple(x){
  
    if (Math.pow(x,2) > 1000) {
      return "It's hotter than the sun!!";
    } else {
      return "Help yourself to a honeycomb Yorkie for the glovebox.";
    
    }
  
  }