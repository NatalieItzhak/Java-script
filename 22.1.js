const btn=document.querySelector("button")
const fullName=document.querySelector(".name")
const age=document.querySelector(".age")
const email=document.querySelector(".email")
const form=document.querySelector(".registration")


function submitForm() {
return confirm('Do you really want to submit the form?' );

  }
if (submitForm=="submit"){
alert('congratulations you successfully sent this form')
} 
else if (btn.click!=="submit"){
    alert('change the information')
}
btn.addEventListener("click",submitForm)

btn.addEventListener("click",()=>{
    myWindow = window.open("", "myWindow", "width=300px,height=100px");
    myWindow.document.write('your name is :' + fullName.value + 
'your age is :' + age.value + 'your email is :' + email.value + 
' for confirmation click submit')
})

