function getDayName() {
    const d = new Date();
    const day = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday", "Saturday" ]

  
 return day[d.getDay()]

}
// console.log(getDayName())


function getDayOfMonth() {
    let d = new Date();
 
 return[d.getDate()];

}
// console.log(getDayOfMonth())

const monthsNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
// console.log(monthsNames[d.getMonth()]);


function getFullYear() {
    let d = new Date();
    let year = new Date().getFullYear()  

  
 return year[d.getFullYear()]

}
// console.log([d.getFullYear()]);

console.log("Today is " + (getDayName())+ " the " + (getDayOfMonth()) + " of " + (monthsNames[d.getMonth()]) + " " + new Date().getFullYear())
