// Block 1
// prints a undefined because its undefine when the console.log running.
function funcA() {
 console.log(a);
 console.log(foo());
 var a = 1;
 function foo() {
 return 2;
 }
}
funcA();

// Block 2
/*  prints the 'Aurelio De Rosa', this. will take the fullname from his own property *   
/*  prints undefined, test isn't a function */

var fullName = 'John Doe';
var obj = {
 fullName: 'Colin Ihrig',
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());


// Block 3
// prints typeof b because its global and a undefined because its local theres no 'let'

function funcB() {
 let a = b = 0;
 a++;
 return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);


// Block 4
/* because of hoistings, it will prints the last declartion of funcC */

function funcC() {
 console.log("1");
}
funcC();
function funcC() {
 console.log("2");
}
funcC();



// Block 5

  /* prints d global variable (there's no let var or const) but error in e,because e is a scoped variable */
function funcD1() {
 d = 1;
}
funcD1();
console.log(d);
function funcD2() {
 var e = 1;
}
funcD2();
console.log(e);


// Block 6
 /* prints 1, it first defined f and than execute funcE */
 /* prints undefined for global scope because its under the console.log (hoisting) */

function funcE() {
 console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();