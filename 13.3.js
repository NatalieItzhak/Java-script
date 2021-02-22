const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
    "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
    "Hamburgers"];

// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.


const compareFood = (a, b) => {

    let newArray = []
    for (let i = 0; i < a.length; i++) {
      for (let n = 0; n < b.length; n++) {
  
        if (a[i] === b[n]) {
            newArray.push(a[i])
        }
      }
    }
    
    if (newArray.length > 0) {
      return newArray
    }
    else {
      return false
    }
  }
  
  console.log(compareFood(food, food1))



