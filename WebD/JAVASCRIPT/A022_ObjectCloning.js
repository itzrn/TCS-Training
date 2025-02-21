//ways to do cloning


//1. using spread operator
let obj1 = {
    age:12,
    wt:23,
    ht:90.90
};

let obj2 = {
    value:101,
    name:"Aryan Prajapari"
};
let dest1 = {...obj1};
obj1.color = "White";

console.log(obj1);
console.log(dest1);


///////////////////////////
//2.  using assign method
let dest2 = Object.assign({}, obj1);

////////////////////////////
// cloning more than one object to an object
let dest3 = Object.assign({}, obj1, obj2);



//////////////////////////////
// 3. iteration
let dest4 = {};
for(let key in obj1){
    dest4[key]=obj1[key];
}
console.log(dest4);


// Garbage collector is automatically managed by the JS engine in the background, just like JAVA do
