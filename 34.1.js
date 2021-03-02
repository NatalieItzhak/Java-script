function handlerError(err) {
    console.log('error');
}
const baseEndPoint = 'https://swapi.dev/api/people/';
const starWars = [];
let homeWorld;


// function myFunc() {
//     let x = document.createElement("TABLE");
//     x.setAttribute("id", "myTable");
//     document.body.appendChild(x);

//     let y = document.createElement("TR");
//     y.setAttribute("id", "myTr");
//     document.getElementById("myTable").appendChild(y);

//     let z = document.createElement("TD");
//     let t = document.createTextNode("cell");
//     z.appendChild(t);
//     document.getElementById("myTr").appendChild(z);
// }

async function displayUser() {
    const response = await fetch(baseEndPoint)
    const data = await response.json()

    // for (let num = 1; num <= 10; num++) {
    //     const response = await fetch(EndPoint);
    //     const data = await response.json();
    //     const planet = await fetch(EndPoint);
    //     const planetData = await planet.json();

    data.results.forEach(star => {
        let obj = {}
    
        obj.name = star.name
        obj.Height = star.height
        obj.Hair_Color = star.hair_color
    
        homeWorld = star.homeworld
        getPlanet(obj)
      });
    }

displayUser();


async function getPlanet(obj) {

    const response = await fetch(homeWorld)
    const planet = await response.json()

    obj.planet = {}
    obj.planet.Name = planet.name
    obj.planet.Population = planet.population

    starWars.push(obj)
    if (starWars.length === 10)
    createTablet()
};


const body = document.querySelector('body')
const text = '<th colspan="5">Star Wars</th><table id="myTable"><tr><td>name</td><td>hair</td><td>height</td><td>planet name</td><td>planet population</td></tr></table>'
const table = document.createElement('table')
table.innerHTML = text
table.style.border = '1px solid black'
body.appendChild(table)


function createTablet() {

    starWars.forEach(obj => {

        let tr = document.createElement('tr')
        table.appendChild(tr);
        let td = document.createElement('td')
        td.innerHTML = obj.name
        tr.appendChild(td);
        td = document.createElement('td')
        td.innerHTML = obj.Hair_Color
        tr.appendChild(td);
        td = document.createElement('td')
        td.innerHTML = obj.Height
        tr.appendChild(td);
        td = document.createElement('td')
        td.innerHTML = obj.planet.Name
        tr.appendChild(td);
        td = document.createElement('td')
        td.innerHTML = obj.planet.Population
        tr.appendChild(td);

    })

    console.log(table.innerHTML)
}