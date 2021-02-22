const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];
for (const countries of listOfNeighbours){
    for (const Neighbour of countries){
        console.log("Neighbour:" + Neighbour)
    }
    }