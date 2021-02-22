
const btn = document.querySelector('#btn')
const tb = document.querySelector('#tb')
const counter = document.querySelector('.counter')


console.log(btn)
console.log(tb)
console.log(counter)


tb.addEventListener('input', function (e) {
    const target = e.target;
    const minLength = target.getAttribute('minlength');
    const currentLength = target.value.length;
    counter.innerHTML = `${currentLength}/${minLength}`;
    let text= document.getElementById("tb").value;
    if(text.length > 99){
        console.log('ok')
    }else{
        console.log('enter more')
    }
    if(currentLength < 100){
        console.log("number of characters:",`${currentLength}`)
        btn.setAttribute('disabled', 'disabled');

     }else{
         console.log('ok') }
         btn.removeAttribute('disabled');
     
});
// byn.addEventListener('click', function (e) {
//     const target = e.target;
//     const clickBtn = target.getAttribute('minlength');
//     const currentLength = target.value.length;
//     counter.innerHTML = `${currentLength}/${minLength}`;
//     if(currentLength < 100){
//         console.log(`${currentLength}`)
//      }else{
//          console.log('ok') }
     
// });







