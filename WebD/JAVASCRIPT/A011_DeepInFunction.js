// functions are also called First class citizens
// bcz function in JS can be assigned to variables also be passed as arguments to two different functions
// can returned from function and can also be stored in Data structures.

function add(a, b){
    return a+b;
}

console.log(add);
console.log(add(90,90));

// assigning function to a variable
let sum = function (a, b) {
    return a+b;
}
//or
// function sum(a, b) {
//     return a+b;
// }
console.log(sum);
console.log(sum(90,90));

// passing a function as an argument

let diff = function (a, b){
    return a-b;
}
// or
// function diff(a, b){
//     return a-b;
// }

function operate(operationFunc, a, b){
    return operationFunc(a, b);
}
console.log(operate(sum, 10, 20));
console.log(operate(diff, 10, 20));

//these function are called higher-order function(the function which take function as argument)


// arrow function
let mutl = (a, b) => {
    return a*b;
}
// or if there is only one line function
// let mult = (a, b) => a*b;

// returning a function as argument
let a=10;
function outer(){
    a=100;
    function inner(){
        return a;
    }
    return inner;
}
// this is called Function + Lexical scope = closure
// as the inner function have the reference to all the variable outside
let returnedFunVar = outer(); // in returnedFunVar the reference of inner function is saved
console.log(returnedFunVar());
a=20; // we change the value of a here
console.log(returnedFunVar);
console.log(returnedFunVar()); // as we get the reference of inner function, the change in a also get reflect on console


/*
let you keep creating a lot of clousers (function + lexical scopes) then there will be over consumption of memory amd u can end up havinh memory leaks.
So use clouser when absolutly needed.
*/