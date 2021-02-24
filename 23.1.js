let body = document.body;
let myClock = document.createElement('p');
myClock.style.fontSize="30px"


function clock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
     let time = `${h}:${m}:${s}`;

    myClock.textContent = time;
   body.append(myClock)

    setTimeout(clock, 1000);
}

clock();