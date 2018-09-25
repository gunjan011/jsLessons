/*
TYPES
*/

//Booleans
let on = true;
console.log(on); //output -> true

let off = false;
console.log(off); //output -> false

//boolean can represent few different values : true/false, on/off. yes/no

//Null
/*
Null = empty value(not 0; not undefined)

it is like the empty container, nothing in it, but still exists as space to fill
*/

let empty = null;
console.log(empty);

//Undefined
/*
undefined = no value assigned (not even an empty container)

it's not an error
*/

let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

/* think of undefined and null as packages in ups
null-> pacakage deliberately left empty
undefined -> package that was forgotten, or a package not used yet
*/

//Numbers
let degrees = 65;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

//if going upto fifteen numbers results


let rounded = 9999999999999999;
console.log(rounded);

let notQuiet = 0.2 + 0.1;
console.log(notQuiet.toFixed(2));
//toFixed is to cutoff decimal

let anotherNum = 0.2 + 0.1;
console.log(anotherNum);
//////////////////////(2  +       1)       /10 (round the numbers. decimals dont work well)
let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numbersAreHard);

//Strings
//strings = any value within quotes; JS spit out the value within the quotes
let stringOne ="double quotes";
let stringTwo = 'single quotes';
console .log(stringOne, stringTwo);

//numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); //number
console.log(second); //string

console.log(typeof first); //number
console.log(typeof second);//string

//What's going on here?
//+ -> addition when given two numbers, concatenation when given two strings

let third = 1050 + '100';

console.log(third);

//Challenge:
// Set 7 variables:
//firstName
//lastName
//houseNumber
//street
//city
//state
//zipcode

//Set each varaiable to its repective type.

//console.log your whole address(with the space between variable).

let firstName = 'Gunjan';
let lastName = 'Aulakh';
let houseNumber = '10187';
let street = 'Blossom Hill Dr';
let city = 'Carmel';
let state ='IN';
let zipcode = '46032';

console.log(firstName, lastName + ',', houseNumber, street + ',',city + ',', state, zipcode);


/*
What is an object?

Object is a container that can hold multiple data types

denoted by the curly braces {}
    has keys and values (color (key): 'blue (value)), separated with a colon
    Each key separated with a coma
    */

    let burritosNow = {
        size: 'large',
        quantity: 4,
        now: true
    }

    console.log(burritosNow);
    console.log(typeof burritosNow);

    //Arrays
    /*
    Arrays are great for lists

    denoted by [
        have values separated by commas -. ['blue', 'green', 'yellow']
    ]
    */
   let burritos = ['large', 4, true];

   console.log(burritos);
   console.log(typeof burritos);