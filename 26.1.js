// Question 1:
// console.log(this); => prints empty obj point to the console window because there's no other element/function above it- its global.

// Question 2:

// point to the the greet function without the property of this.name
// I changed the syntax into a function without the arrow

// const myObj = {
//     name: "Timmy",
//     greet: () => {
//     console.log(`Hello ${this.name}`);
//     },
//    };
//    myObj.greet();


// my solution
const myObj = {
    name: "Timmy",
    greet: function (){
    console.log (`hello ${this.name}`);
    },
   };
   myObj.greet()


// Question 3:  point to the console window because 
const myFuncDec = function () {
    console.log(this);
   };
   
   myFuncDec()


// Question 4:  point to the console window because it's in arrow function
   const myFuncArrow = () => {
    console.log(this);
   };
   myFuncArrow();
   


   // Question 5: there is no class that calls element so its undefined
//    ocument.querySelector(".element").addEventListener(() => {  
//        console.log(this);
//     });

    // We need to create this element with 'element' class name. 
    //       Than we need to insert it to the DOM, also we need to add the first
    //       argument of the event listener.
    //       It will print the window element because it's in arrow function 
  
 

          let body = document.body;
          let el = document.createElement('element');
          el.classList.add('element');
          el.style.height = '100px';
          el.style.width = '100px';
          el.textContent='new element';
          el.fontSize='50px';
          console.log(el);
          body.insertAdjacentElement('afterbegin', el);
          
          let x = document.querySelector('.element');
          console.log(x);
          x.addEventListener('click', () => {  
              console.log(this);
          });
