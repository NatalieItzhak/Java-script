
const avarge= (a, b, c)=>{
    return (a+b+c)/3;
}
const John= avarge(a=89, b=120, c=103);
const Mike= avarge(a=116, b=94, c=123);

// console.log(John);
// console.log(Mike);

const TeamWin= (TeamA, TeamB)=>{
    if (TeamA> TeamB)
return 1;
else if (TeamB > TeamA)
return -1;
else 
return 0
}

// console.log(TeamWin(John, Mike))

const Winner= TeamWin(John, Mike);
if (Winner===-1)
console.log ("Jhon team win")
else if (Winner===1)
console.log ("Mike team win")
else  
console.log ("tie")
