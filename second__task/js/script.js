"use strict"

var m = prompt('Введіть ціле додатнє число');
if (m > 0) {
    var n = prompt('Введіть число, більше за ' + m);
}
var result = 1;
if (n - m <= 1 || n % 2 + m % 2 == 0 && n - m == 2) {
    console.log('У даному діапазоні лише один непарний елемент');
} else {
    for (m; m <= n; m++) {
        if (m % 2 != 0) {
            result = m * result;
        }
    }
    console.log(result);
}