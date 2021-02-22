const myFirstDiv = document.querySelector("#myFirstDiv");
const mySecondDiv = document.querySelector("#mySecondDiv");
const myThirdDiv = document.querySelector("#myThirdDiv");
const myFourthDiv = document.querySelector("#myFourthDiv");

// myFirstDiv.style.color = 'pink';
// mySecondDiv.style.color = 'red';
// myThirdDiv.style.color = 'yellow';
// myFourthDiv.style.color = 'blue';

const allDivs = document.querySelectorAll('div');
console.log(allDivs);
allDivs.forEach((d)=>{
  d.style.color="pink"
  d.style.fontSize="40px"
}
)