function palindrome(str) {
 var lowered = str.toLowerCase();
 var simplified = lowered.replace(/[^a-z]/g, '');
 var forward = simplified.split('');
 var backward = forward.slice();
 var backwards = backward.reverse();  

 console.log(forward == backwards);
}

palindrome("not a palindrome")