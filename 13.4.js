// Write a function that has one argument, a positive integer.
// Lets call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right hand side if empty!

const steps = (n) =>{

    let stepShape = '#';
    for(let i=0; n>i; i++){
      console.log(stepShape)
      stepShape += '#'
    }
  
  }
  
  steps(7)