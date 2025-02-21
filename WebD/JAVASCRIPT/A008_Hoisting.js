createCourse("HLD"); // this line will still work even the function is defined after it, this is not possible in most of the language which is possible here
function createCourse(coursename){
    console.log('creating ' + coursename);
}
createCourse("LLD");

// but the above things is not same in varibale
console.log(x); // this will show undefined
var x=10;
console.log(x);

/*
How JS code works?
The entire environment where the code is evaluated, executed basically the variables, the functions, the scope
a term given to it called Execution context.

so what happen every time you run or execute a JS code there is an excution context created
intially there is a global execution context called as GEC.
Now every time you create a new function a new execution context will created and will be added to the call stack.

Now this execution context also have 2 main components
1. before running the code first component happen
   happening -> some memory is allocated to the variable and fucntions, so this phase is also called memory phase/ variable environment

   in this phase variables are declared

2. Code is executed line by line (JS is Synschronous single threaded language)
   this is called the code phase.

   in this phase variable are initialized



The concept of being able to  access or extract variable and funtions before initializing them
before putting a value into them  is called Hoisting
   
*/












//////////////////////////////////////////////////////
// Hoisting?
// its a process which shift the variable declaration(using var) and function to the top(global scope)
print("Aryan"); // this will not give error even if the fuction is defined latter as the function is moved in global scope, this is called hoisting
function print(name){
   console.log(name);
}
// in hoisting the declaration moves to gloabl scope
// if we try to do the same thing with variable(made using var) and try to print the value of that variable then we will get undefined value printed at the console
console.log(xx);
var xx =10;
// it will give the reference error when we try the same thing with let and const




////////////////////////////////////////////////
// hositing in class
// const obj = new Human(); // you will get error here bcz class hoisting is not possible
class Human{}

// function is called first class citizen



