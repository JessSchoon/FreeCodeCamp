

function factorialize(num) {
  var factorialized = num;
  if (num ==1 || num == 0){
  	console.log (1);
  }
  while (num > 1) {
    num -=1;
    factorialized *= num;
  }
  console.log(factorialized);
}

factorialize(5);