
// by value
// applicable for all the value type data type
let x = "Aryan";
let y = x; // here is copy by value

x = "Ashmit";
console.log(x);
console.log(y); // thats y, value of y didn't change


// by reference
// applicable for all the reference type data type
let p={name:"Aryan"};
let q = p; // this is copying the reference not the value

p.name = "Ashmit";
console.log(p);
console.log(q);