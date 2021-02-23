const smileys= document.createElement('img');
const text= document.querySelector('#text');
const sumbit= document.querySelector('#btn');
smileys.src="https://ih1.redbubble.net/image.1043435663.0507/st,small,507x507-pad,600x600,f8f8f8.jpg";
smileys.style.width="50px";
smileys.style.height="50px";
const smileysDiv= document.createElement('div');
sumbit.addEventListener("click",()=>{
     smileysDiv.textContent='';
   if (text.value % 1 === 0 && text.value > 0) 
   {
    for(let i=0; i<parseInt(text.value); i++){
        smileysDiv.appendChild(smileys.cloneNode(true));
        // console.log(i);
     
    }
}});

document.body.appendChild(smileysDiv)