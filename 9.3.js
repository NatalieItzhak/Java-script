const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];


function foodOrder() {
    
    const food1 = foods.sort();
    console.log(food1);

    const foodUpper = foods.sort();
    console.log(foodUpper);

}; foodOrder();



const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

function fruits() {

const longestStr = words.sort( (a,b) => (b.length - a.length));
console.log(longestStr);
};
  fruits();