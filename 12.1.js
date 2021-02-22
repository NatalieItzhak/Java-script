// Write the following functions using the reduce built-in function.

// 1. max
const nums= [1,5, 7,9]
const maxNum = nums.reduce((max, n) => n > max ? n : max, nums[0]);
console.log(maxNum)


// 2. sum of even numbers
const arrSum = arr => arr.filter(e => (e % 2==0)).reduce((a,b) => a + b);
console.log(arrSum([20, 10, 5, 10,3]))


// arrSum = function(arr){
//     return arr.reduce(function(a,b){
//       return a + b
//     }, 0);
//   }


// 3. average
const arrAvg = arr => arr.reduce((a,
    b) => a + b, 0) / arr.length
console.log(arrAvg([5, 2, 5, 8]))