const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');

inputs.forEach((el) => {
    el.addEventListener("keyup", () => {
        el.nextElementSibling.focus()
    })
})
function toPasteit(e) {
    const paste = e.clipboardData.getData('text');
    inputs.forEach((input, i) => {
        console.log(input);
        input.value = paste[i] || '';
    });
}
inputs[0].addEventListener('paste', toPasteit);






