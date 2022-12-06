"use strict"

var logIn = prompt('Будь ласка, введіть свій логін');
if (logIn == "Admin") {
    var password = prompt('Будь ласка, введіть свій пароль');
} else {
    alert('Доступ заборонено!');
}
if (password == 12345) {
    alert("Ласкаво просимо!");
}
if (logIn == "Admin" && password != 12345) {
    alert("Неправильний пароль!");
}
