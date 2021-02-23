const body = document.querySelector("body");
// console.log("body")

document.body.style.backgroundColor = 'deepPink';
document.body.style.width = '100vw';
document.body.style.height = '100vh';




const welcome = document.createElement('p')
// console.log("welcome")
welcome.textContent = 'Welcome to my pure JS web'
welcome.style.color = 'black';
welcome.style.fontSize = '40px'
welcome.style.padding = '2rem'
welcome.style.margin = '0';
welcome.style.textAlign = 'center'
welcome.style.position = 'relative'
welcome.style.top = '10%'
welcome.style.left = '50%'
welcome.style.transform = 'translate(-50%,-50%)'
welcome.style.borderBottom = '5px solid black'
welcome.style.fontFamily= 'ariel'



body.append(welcome)


const div = document.createElement('div')
// console.log("div")
div.textContent = 'By Natalie Itzhak'
div.style.color = 'white'
div.style.fontSize = '25px'
welcome.style.padding = '2rem'
welcome.style.margin = '0';
welcome.style.textAlign = 'center'
welcome.style.position = 'absolute'
welcome.style.top = '40%'
welcome.style.left = '50%'


body.append(div)


const btn = document.createElement('button')
// console.log("btn")
btn.style.width='200px'
btn.style.height='50px'
btn.style.cursor = 'pointer';
btn.textContent = '  jock!'
btn.style.backgroundColor='pink'

btn.addEventListener("mousemove",()=>{
    btn.textContent='why did the programmer quit his job? (click for the answer)';
});

btn.addEventListener("click",()=>{
    btn.textContent='because he didnt get arrays';
});



body.append(btn)
