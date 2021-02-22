// 6.4-1
​
const jumpers = [5, 5, 8, 7, -1, 5,-1,-1,-1,5,7,8];
​
const jumps = () => {
    let arr = [];
​
    for (let i = 0; i < jumpers.length; i++) {
        arr.push(jumpers[i])
        if ((i + 1) % 3 === 0) {
            console.log(avg(arr)) 
            arr =[];
        }
        console.log(arr)
    }
}
​
const avg = (arr) => {
    let x = 0,count1 =0;
​
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !==-1){
            count1++;
            x += arr[i];
        }
    }
    if(count1 ===0) return -1;
    return x/count1;
}
​

console.log(avg([-1,-2,-1]))
​
 jumps();