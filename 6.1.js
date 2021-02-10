// // 6.1
let nums = [1, 2, 8, 3];

for(let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}


// // 6.2
var a = [1,2,2,4,5,8];

function arrayLength(a){
  var length = 0;
  while(a[length]!==undefined){
    length++;
  }
  return length;
}
console.log(arrayLength(a))


// 6.3
function arraySum(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}

var payChecks = [123,155,134, 205, 105]; 
console.log(arraySum(payChecks));



// 6.4


var Array = ["1", "2", "3", "4"];
var total=1;

for (var i = 0; i < Array.length; ++i) {
    total *= Array[i];
}

console.log(total);