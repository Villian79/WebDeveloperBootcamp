console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 40.");
i = -10;
while (i < 20) {
    console.log(i);
    i++;
}

console.log("PRINTING EVEN NUMBERS BETWEEN 10 AND 40");
j = 10;
while(j <= 40) {
    console.log(j);
    j += 2;
}

console.log("PRINTING ODD NUMBERS BETWEEN 300 AND 333");
var m = 300;
while(m <= 333) {
    if(m % 2 !== 0){
        console.log(m);
    }
    m++;
}

console.log("PRINTING ALL NUMBERS THAT CAN BE DIVIDED BY 3 AND 5 IN THE RANGE BETWEEN 5 AND 50");

var n = 5;
while(n <= 50) {
    if(n%5===0 && n%3===0){
        console.log(n);
    }
    n++;
}
