var i;
for (i=0; i <50; i++) {  
    if ((i % 7 == 0) && ("7".includes(i)))
    {
      console.log("BOOM BOOM");    
    }
   else if  (i % 7 == 0)
    {
    console.log("BOOM ");    
    }
    else {
      console.log(i);
    }
} 

