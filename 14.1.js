function getSum(arr1, arr2)
{ 

    
    let sum = 0;

    for (let i=0; i < arr1.length; i++)
    {
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++)
    {
        sum += arr2[i];
    }

    return sum;
}



console.log(getSum([1,2,3],[5,66,23]));


      
    

    /* I used the VS code debbuger terminal */
/* sum is const so we can't change it     
        const sum = 0; 
        
        I add return to the function*/

/* missing ',' between these arrays    
    getSum([1,2,3][5,66,23]);          */  