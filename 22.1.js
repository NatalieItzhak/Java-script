const btn=document.querySelector("button")
const fullName=document.querySelector(".name")
const age=document.querySelector(".age")
const email=document.querySelector(".email")
const form=document.querySelector(".registration")

btn.addEventListener('click', function(event) {
    event.preventDefault();
    const send = confirm(`Your details are: ${fullName.value} ${age.value} ${email.value}`);
    if (send)
    {
        if (age.value > 0)
        {
            const APPROVEMSG = confirm(`Congratulations you successfully sent this form`);
        }
        else
        {
            const ERRORMSG = confirm(`Invalid age`);
        }
    }
});

