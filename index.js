
/*
1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.
*/
function convertFahrToCelsius(val){

    if(typeof val === "string" || typeof val === "number"){
        var num = parseint(val);
        //1F = 1.8c + 32 (e.g 0deg c = 32deg F)
        var answer = ((num -32) / 1.8);
        var answerDec = answer.toFixed(4);
        return `'${answerDec}'`
    };
    if(Array.isArray(val)){return `[${val}] is not a valid number but a/an array.`};
    if(typeof val === "object"){
        var value = JSON.stringify(val);
        return `${value} is not valid number but a/an object.`}
    };

    console.log(convertFahrToCelsius("0"));
    console.log(convertFahrToCelsius([1,2,3,4]));
    console.log(convertFahrToCelsius({obj:1 , name: "sarah"}));



/*
2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, 
creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 
with "yu", "gi" and "oh", then returns the resulting array.
Note:
- for numbers that have multiple factors, use hyphens as separators
e.g 10 === "yu-oh", 30 === "yu-gi-oh"
- perform checks on your input and return `invalid parameter: ${parameter}` if an
invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 
Use the following cases as guides:
- checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
- checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
- checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`*/

function checkYuGiOh(n){
    if(!Number(n)){
        var content = JSON.stringify(n);
        return `invalid parameter: "${content}"`
     }
   else{
        var array = [];
        for(var i=1; i<= n; i++) {
            if(i % 2 === 0 && i % 5 === 0){
                array.push("yu-gi-oh");
            }
            else if(i % 2 === 0 && i % 3 === 0){
                array.push("yu-gi");
            }
            else if(i % 2 === 0 && i % 5 === 0){
                array.push("yu-oh");
            }
            else if(i % 3 === 0 && i % 5 === 0){
                array.push("gi-oh")
            }
            else if(i % 2 === 0){
                array.push("yu");
            }
            else if(i % 3 === 0){
                array.push("gi");
            }
            else if(i % 5 === 0){
                array.push("oh")
            }
            else {array.push(i)}
        }    }  
        return array;
    }
//end of function checkyugioh
//testing checkyugioh
console.log(checkYuGiOh(29));
console.log(checkYuGiOh("29"));
console.log(checkYuGiOh("Nickky"));
console.log(checkYuGiOh([1,2,3,4]));
console.log(checkYuGiOh({name: "Nickky", age: 30}));





