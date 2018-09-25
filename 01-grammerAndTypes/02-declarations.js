/*
VARIABLES

variable must begin with a letter, underscore, or dollar sign
2) you can use numbers, but they follow one of the above
3) JavaSript is case sensitive-'hello' and 'Hello" are diff

*/

var a = 1;
var b = 2;
console.log(a + b); //3

/*
DECLARATIONS

Declarations are the LEFT side of a a variable
It is on the left side of the assignment operator (=)

Initializations are the right side of a variable
Set the value of the variable
includes the variable name(x), the assignment operator (=), and the value (10) => x= 10
*/

var x;
console.log('Declaration:'. x);

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Intialization 2:', x);

/*
Var, Let, and Const
var= 'old' js keyword for variables
let= 'new' keyword for variables (introduced in ES6)
const= also 'new'; declares unchangeable variables
*/

let today = "Great!";
const elevenFifty = "Wonderful";
console.log(today, elevenFifty);

today = "lovely!";
console.log(today, elevenFifty);

elevenFifty = 'Super'
// semi colon not required //



