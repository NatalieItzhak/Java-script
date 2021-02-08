console.log( "Karin " +  calculateGrade([80, 1,6]));
console.log("Natalie " + calculateGrade([100, 100,100]));

function calculateGrade(inputMarks){

    var marksSum=0; 
    var avarage=0;
  
    //for (i=0; i<inputMarks.length; i++) {
    //    marksSum = marksSum + inputMarks[i];
    //}

    //get avarge
   // for (let item of inputMarks){
    //       marksSum+=item;
    //}

   // avarage= marksSum / inputMarks.length;

    avarage= getAvarage(inputMarks);
    

    //check for grade
    if (avarage<59)
    {
        return "F";
    }
    if ((avarage==60) && (avarage<=69))
    {
        return "D";
    }
    if ((avarage==70) && (avarage<=79))
    {
        return "C";
    }
    if ((avarage==80) && (avarage<=89))
    {
        return "B";
    }
    else
        return "A";


}

function getAvarage(arr){
   var marksSum=0;
    for (let item of arr){
        marksSum+=item;
     }

    var avarage= marksSum / arr.length;
    return avarage;
}