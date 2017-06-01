
function reverseString(str) {
 var array = str.split('');
  var backwards = array.reverse();
  console.log (backwards.join(''));
}

reverseString("Greetings from Earth");