"use strict"

var multiplier;
var result = 0;
function GetSum() {
    for (var i = 1; i < arguments.length; i++) {
        result += arguments[i];
    }
    multiplier = arguments[0] * result;
    return result;
}

console.log(GetSum(3, 13, 15, 28));
console.log(multiplier);