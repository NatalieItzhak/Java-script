//  10.2-1
 let newArray= ["natalie", "Itzhak"].map(doubleValues);
 
 
 function doubleValues(name) {
    return name.map
    `${name},${name}`;
}
console.log(newArray)

// 10.2-2

function onlyEvenValues(arr){
    const arr2 = [];
      arr.forEach((val) => {
        if(val % 2 === 0) arr2.push(val);
      });
      return arr2;
  }
  console.log(onlyEvenValues([1,2,3,4]));

//   10.2-3

function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function(val) {
    newArr.push(val[0] + val[val.length - 1]);
  });
  return newArr;
}
console.log(showFirstAndLast(["natalie",  "Itzhak"]));

//   10.2-4

function vowelCount(str) {
  let splitArr = str.split("");
  let obj = {};
  const vowels = "aeiou";

  splitArr.forEach(function(letter) {
    let lowerCasedLetter = letter.toLowerCase()
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}
console.log(vowelCount("natalie"));

//   10.2-5
    
function capitalizeString(str) {
  let upperCasedStr = str.toUpperCase()
  return upperCasedStr;
}
console.log(capitalizeString("natalie"));


//   10.2-6

function shiftLetters(str, num) {
  str = str.toLowerCase();
  var result = '';
  var charcode = 0;
  for (var i = 0; i < str.length; i++) {
    charcode = (str[i].charCodeAt()) + num;
    result += String.fromCharCode(charcode);
}
return result;

}
console.log(shiftLetters("natalie", 6));

//   10.2-7

const capitalize = (string) => {
  return string.split(" ").map(word => {
  return word.split("").map(letter => {
  return letter.toUpperCase();
  }).join('')
  }).join(' ')
  }
  
  const swapCase = (string) => {
  return string.split(" ").map((word, index) => {
  return (index % 2 === 0) ? capitalize(word) : word
  }).join(' ');
  }

console.log(swapCase("natalie Itzhak"))