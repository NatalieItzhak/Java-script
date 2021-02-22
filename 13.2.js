
var words = ["I", "am", "Natalie", "Itzhak"];
let i = 0;
let j = 0
while (i < words.length) {
  j = 0;
  while (j < words[i].length) {
    console.log(words[i][j]);
    j++;
  }
  i++;
}

