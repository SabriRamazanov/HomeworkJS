"use strict"

const contacts = [{

    name: 'Tom',

    phoneNumber: '098-76-54-352',

},

{

    name: 'Peter',

    phoneNumber: '098-54-54-652',

},

{

    name: 'Ann',

    phoneNumber: '050-711-21-21',

},
{

    name: 'John',

    phoneNumber: '050-711-21-21',

},
{

    name: 'Carey',

    phoneNumber: '050-711-21-21',

},

];
// перший варіант сортування
let namesInArray = contacts.map(function (item, index, array) {
    return item.name;
});
console.log(namesInArray.sort());

// другий варіант сортування
function sortByName(name) {
    return (a, b) => a[name] > b[name] ? 1 : -1;
}
contacts.sort(sortByName('name'));
contacts.forEach(contact => console.log(contact.name));
