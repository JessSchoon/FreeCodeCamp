function golfScore(par, strokes) {
  
   score= strokes-par;
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (score <= -2){
    return "Eagle";
  } else if (score == -1){
    return "Birdie";
  } else if (score === 0){
    return "Par";
  } else if (score == 1) {
    return "Bogey";
  } else if (score == 2) {
    return "Double Bogey";
  } else{
    return "Go Home";
  }
  
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

if (require.main === module) {
  console.log(golfScore(4, 1));
}
