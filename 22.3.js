
const open = document.querySelector("h1")
const round2 = document.querySelector("#keepplaying")
const guessbox = document.querySelector("#guess")
const start = document.querySelector("#startBtn")

let randomletter;

function game() {
    guess.value = "";
    const letters = ['a', 'b', 'c', 'd', 'p', 'l', 'u', 'e', 'r', 'i', 'z', 's', 'o', 's', 'q', 'r']
    randomletter = letters[Math.floor(Math.random() * letters.length)];
    console.log('random letter is:', randomletter)
    return randomletter;

}

function checkGuess() {
    let myGuess = guessbox.value;
    if (myGuess === randomletter) {
        feedback.textContent = "You got it right!"
    } else if (myGuess !== randomletter) {
        feedback.textContent = "wrong guess"
    }

}
submitGuess.addEventListener('click', checkGuess)


round2.addEventListener("click", game)


