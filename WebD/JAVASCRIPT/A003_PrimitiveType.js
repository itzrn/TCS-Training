// variable -> it's a named memory location

// we use three types of data type here
// var -> we wont use anymore (it is function scoped and global scoped but not block scoped), this also allows redeclaration
// let -> bloacked scoped, declared only once
// const -> use to keep contant values, declared only once

// primitive / value type data type -> (Number, String, boolean, undefined, null, symbol, Big Integer)

// string
let x = "This is Aryan Prajapati";
console.log(x);
// this is the way to find the type of a variable
console.log(typeof(x));


// Number
let y=1;
console.log(y);
console.log(typeof(y));

let z=1.1;
console.log(z);
console.log(typeof(z));

// boolean
let a=true;
console.log(a);
console.log(typeof(a));

// undefined
let w; // let we won't put any value to variable
console.log(w);
// the default value of variable is undefined utill we assign any value to it

// technically we can assigne undefined, but it is not a good practice to do
let xx = 1;
console.log(xx);
xx = undefined; // we are not supposed to assign any value to undefined, it will not through any error but it is not a good practice
console.log(xx);


// Object
// null, using this we can put a variable as empty or undefined
let xxx = 0; // here xxx is number
xxx = null; // here xxx is object
xxx = "String"; // here xxx is string
// So above is the reason JS is a dynamic language
console.log(xxx);
console.log(typeof(xxx));




/*
Falsey
undefined, null, 0, false, NaN, ''

Truley
anything which is not falsey



1s complement means -> fliping the bits
2s complement means -> adding 1 to 1s complement
*/



