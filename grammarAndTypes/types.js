/*Number => literally any number*/
let number = 10;
console.log(number);


/*String => strings are used to represent text
Wrap them in sigle or double quotes*/

let stringOne ="double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

/*Booleans => true or false
to denote as a Boolean DO NOT use quotes around word. To denote as a String or Object, DO USE quotes(single or double) around word*/

let on = true;
let off = false;
console.log(on,off);


/*Null => Null is an empty value*/
let empty = null;
console.log(empty);

/*Undefined => no value is assigned and does not act as an empty*/
let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

/*Null is like a container with nothing in it
Undefined is when a variable has never been set, or has not yet been created */

/*Objects => Used to store many values instead of one single value use CURLY BRACKETS {} to denote an object*/

let frodo = {
    race: 'hobbit', 
    rings: 1,
    cloak: true
}
console.log(frodo);
console.log(typeof frodo);  /* type of frodo is an object. Look at run code*/



/* Arrays => containers that hold lists of items
use/denoted by [] SQUARE BRACKETS*/

let list = ['item1', 'item2', 'item3'];
console.log(list);

let burritos =['large', 4, true];
console.log(burritos);

console.log(typeof burritos);

/*DataType Literals
- A literal represents a fixed value that we as developers insert into the code
    Includes trings, numbers, boolans, objects, and arrays*/

/*String Literal*/
let car = 'Ford';

/* Numeric Literal*/
let december = 12;

/* Object literal*/
let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley',
    d: 'chili',
    e: 'cereal'
};



/*Array literal*/
let days =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];