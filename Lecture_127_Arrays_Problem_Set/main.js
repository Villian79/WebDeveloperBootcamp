console.log("PRINTING OUT ARRAY IN REVERSE ORDER / printReverse(array)");
function printReverse(arr) {
    for(var i = arr.length -1; i >= 0; i--){
        console.log(arr[i]);
    }
}

console.log("CONFIRMING THAT THE ARRAY IS UNIFORM / isUniform(array)");
function isUniform(arr) {
    var index = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== index){
            return false;
        }
        return true;
    }
}

console.log("ADDING ALL ELEMENTS OF THE ARRAY / sumArray(array)");
function sumArray(arr){
    var sum = 0;
    arr.forEach(function(element){
        sum += element;
    });
    return sum;
}

console.log("FINDING THE ELEMENT WITH MAX VALUE IN THE ARRAY/ max(array)");
function max(arr){
    var maximum = 0;
    arr.forEach(function(element){
        if (element > maximum) {
            maximum = element;
        }
    });
    return maximum;
}
