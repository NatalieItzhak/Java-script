//
const people = ["Greg", "Mary", "Devon", "James"];

// 6.2-1
// let i;
for(let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }

//   6.2-2
 const first= people.shift();
 console.log(people);


//   6.2-3
 const last= people.pop();
 console.log(people);

//  6.2-4
const AddBegining= people.unshift("Matt");
console.log(people);


// 6.2-5
const AddEnd= people.push("Natalie");
console.log(people);


// // 6.2-6

const people2 = ["Greg", "Mary", "Devon", "James"];
//loop back-words through array when removing items like so:
for (var i = people2.length - 1; i >= 0; i--) {
    if (people2[i] === "Mary"){ 
        people2.splice(i, 1);
    }
}
console.log(people2)

// 6.2-7

const people3 = ["Greg", "Mary", "Devon", "James"];
console.log(people3.splice(people3.indexOf(people3[0])-1));
console.log(people3)

console.log(people3.splice(people3.indexOf(people3.length-1)-1));
console.log(people3)


// 6.2-8
console.log(people2.indexOf("foo"))

// 6.2-9
console.log(people2.indexOf("Devon"))

// 6.2-10
const people4 = ["Greg", "Mary", "Devon", "James"];
people4.splice(2,1);
people4.splice(2,0,'"Elizabeth', 'Artie');
console.log(people4)

// 6.2-11

let withBob= people.concat("Bob");
