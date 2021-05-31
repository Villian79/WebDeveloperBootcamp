console.log("FUNCTION THAT CONFIRMS IF THE GIVEN NUMBER IS EVEN");

function isEven(num) {
    console.log(num + " is EVEN?");
    return console.log(num % 2 === 0);
}
isEven(333);

console.log("FUNCTION THAT RETURNS FACTORIAL OF A GIVEN NUMBER");

function factorial(num) {
    var number = num;
    console.log("factorial of " + number + " is:");
    if(number === 0){
        return console.log(1);
    }
    else {
        for(var i = number - 1; i > 0; i--){
            number *= i;
        }
    return console.log(number);
    }
}
factorial(10);

console.log("FUNCTION THAT REPLACES KEBAB STYLE TO SNAKE STYLE");
console.log("This-is-kebab");
function kebabToSnake(str) {
    var newStr = str.replace(/-/g , "_");
    newStr = newStr.replace(/kebab/g , "string");
    return console.log(newStr);
}
kebabToSnake("This-is-kebab");
