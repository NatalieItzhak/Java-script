const numbers = [1, -5, 666, 2, 400, 11];
function sort() {
    const sortNumbers = numbers.sort( (b, a) => (a - b) ) 
    console.log(sortNumbers);

}
sort();

function sort2() {
    const sort1 = numbers.sort( (b, a) => (b - a) ) 
    console.log(sort1);
}
sort();
