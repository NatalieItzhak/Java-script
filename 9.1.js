// 9.1
function isString(str, callback) {
    console.log(`Hello ${str} .`);
    callback();
  }
  if(typeof str ==="string"){
            callback(str);
    
        }
    
  isString('Natalie', function() {
  });



    //  9.1-2                   
function FirstWordUpperCase(str, CallbackFunc)
{
    str = str.split(" ");
    str[0] = str[0].toUpperCase();
    
    str = CallbackFunc(str);
    console.log(str);
}
const PrintWithDashes = (str) => (str.join("-")); 


function Callbackf()
{
   
    FirstWordUpperCase('', function() {
    });
  
    FirstWordUpperCase('are you think', PrintWithDashes);

};Callbackf();
