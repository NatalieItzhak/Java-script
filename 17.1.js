/* Select the differents elements */
let text = document.querySelector('.text');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');


plus.addEventListener('click', () => {

    let fontSize = parseInt(window.getComputedStyle(text).fontSize);
    fontSize += 10;
    if (fontSize < 100) {
        text.style.fontSize = `${fontSize}px`;
    }
});


minus.addEventListener('click', () => {
    let fontSize = parseInt(window.getComputedStyle(text).fontSize);
    fontSize -= 10;
    if (fontSize > 6) {
        text.style.fontSize = `${fontSize}px`;
    }
});