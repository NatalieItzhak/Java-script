let input = require('readline-sync');

// // 3.1 a if/else conditional expression.

let passwordLength = input.question("Please enter a password:");
if (passwordLength.length > 7 ){ 
  console.log ("strong");
}
 else{
  console.log("Weak");
}


// // 3.2 a ternary conditional expression.

let passwordLengthh = input.question("Please enter a password:");
 
let password= passwordLengthh.length >7? 'strong':'Weak';

  console.log(password) 


  // 3.4 
  var upperCaseLetters = /[A-Z]/g;

let input = require('readline-sync');
let password = input.question("Please enter a password:");
let passwordValid= (password.length >7 )&& (password.match(upperCaseLetters))? 'very strong':'strong';
console.log(passwordValid)



