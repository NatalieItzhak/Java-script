

let numberScore= Num => {

    if (Num < 64) 
        return "F";
    
    if ((Num == 65) && (Num<= 69)) 
        return "D";
    
  else if ((Num == 70) && (Num <= 79)) 
        return "C";
    
   else if ((Num == 80) && (Num <= 89)) 
        return "B";
    
    else
        return "A";

}
console.log(numberScore(Num=80))


