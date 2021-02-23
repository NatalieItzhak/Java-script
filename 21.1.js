const age=document.querySelector('#userAge')
const btn=document.querySelector('.btn')
const msg=document.querySelector('.msg')
console.log(age)
console.log(btn)
console.log(msg)

btn.addEventListener("click", ()=>{
    if(age.value >18){
       msg.textContent='you can drink appear'
      
    }
    else {
        msg.textContent='you’re too young'
     
    }
})