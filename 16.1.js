// Block 1
var b = 1;
function someFunction(number) {
 function otherFunction(input) {
 return b;
 }
 b = 5;
 return otherFunction;
}
var firstResult = someFunction(9); //prints the functions name
var result = firstResult(2);//prints the result=5

// Block 2

var a = 1;
function b2() {
 a = 10;
 return;
 function a() { }
}
b2();//it won't reach it
console.log(a); //it will print 1

// Block 3

let i;
for (i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
 setTimeout(log, 100); 
}
// it will console log for 3 times i = 3 ,  the for loop will increment i till 3


