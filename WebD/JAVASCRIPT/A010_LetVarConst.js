// there are three ways to declare a variables
// 1. const
// 2. let
// 3. var
// const and let are very strict than var
console.log(a); // here is reference error
console.log(b); // here is reference error
console.log(c); // no error, but with undefined value

let a=10;
const b=100;
// above two, before the code phase, are in some other location with value unavailable
// this is bcz of the temporary dead zone

var c = 30;
// above , before the code phase, is in some memory location with undefined value
// so hoisting is possible in var

console.log(a);
console.log(b);

// const and let are block scoped
// var is considered function scope

{
    let x=10;
    const y=10;
    var z=10;
    console.log(x);
    console.log(y);
    console.log(z);
}
// console.log(a); // error
// console.log(y); // error
console.log(z); // bcz var is in global

// when the compiler reach to line 39, it creates a local space till the line 40
function help(){
    let x=10;
    // is the variable x is not in the function then it will check outside the function adn still if it didn't get it will give error, so this is called le xical scope
    console.log(x);
}