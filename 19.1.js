const li= document.querySelector(".start-here")
const li2 = document.createElement("li");
// console.log("li:", li)
// console.log("li:", li2)

li.textContent="“main title";
li2.textContent = "sub title 4";

li.appendChild(li2);

const uls = document.querySelectorAll('ul')
uls[1].appendChild(li2)

const x = document.querySelectorAll('li')
x[x.length - 1].remove()

x[0].innerHTML = 'Master Of The Dom'


const newP =document.querySelector("p");
newP.textContent = 'Natalie Itzhak';
newP.style.color = 'pink';
newP.style.fontSize = '30px';
