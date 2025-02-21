// Objects
// conatains the group of info together
// it is the collection of key value pairs

let course = {
    title:"JS",
    description:"projects",
    rating:5
};

console.log(course);
console.log(typeof(course));
// two notations to access the key
console.log(course.title); // . notation
console.log(course["rating"]); // bracket notation


///////////////////////////////////////////////////
// Reference type is also called as non-primitive type
// when an array is created the object get stored in the heap memory but the reference get store int the stack memory

// Object is a collection of key value pairs
let obj = {
    name:"Aryan",
    "full name":"Aryan Prajapati",
    age:22,
    weight:59,
    height:5.5,
    greet:function(){
        console.log("Hello kasi hai app log");
    }
}
console.log(obj);
obj.greet();

let obj2 = obj; // this is not copyinh the value inside it, insted it copy the reference of the obj created in the heap memory
// so changing anything in the obj will reflect in the obj2, just like in java
// shallow copy means copying a refernce to a new variable
// deep copy means copy the inside values to a new object


/////////////////////////////////////////////////////////
// array is a collection of heterogenous type of data
let arr1 = [1,2,3,4,5];

// using array constructor
let arr2 = new Array("Aryan", 1,2,3,4,0.989);
let len2 = arr2.length;
console.log(len2);

///////////////////////////////////////////////////////////
// methods in array
// push, pop, shift, unshift, slice, splice, map, filter, reduce, sort, indexOf, find

// shift -> remove the first element form the array
// unshift ->add one element at the starting
// slice is just like substing of string
// splice is used to update the array in any way like adding at particular index, deleting any particular index etc.
arr2.splice(1,3,"Aryan"); // this will remove 3 elements taking the index 1 and then add "Aryan"


///////////////////////////////////////////////////////////
// printing array using .map
arr2.map((ele, ind) => {
    console.log(`${ele} ${ind}`);
});

//////////////////////////////////////////////////////////
const ans1 = arr2.filter((ele)=> {
    return typeof(ele) == 'string';
});
console.log(ans1);

/////////////////////////////////////////////////////////
// ASCE
let arr3 = [1,2,3,4,5,6,7,8,9,10, 10];
// by default the elelments of array is treated as string
arr3.sort((a, b) => a-b);
console.log(arr3);
// DESC
arr3.sort((a,b)=>b-a);
console.log(arr3);

////////////////////////////////////////////////////////
// indexOf is used to get the index of first occurance of any element


///////////////////////////////////////////////////////
let x = arr3.find((num, index) => { // three parameters can be given ele, index, array
    if(num == 10) return index;
}); // it take a callback function on the basis of which it decide is the element in arry or not
console.log(x);

//////////////////////////////////////////////////////
// for each loop
arr1.forEach((val, ind)=>{
    console.log(val);
    console.log(ind);
});


// for int ->  this basically is used for objects
for(let key in obj2){
    console.log(key, " ", obj2[key]);
}

// for of -> used for arrays, string
let str = "Aryan Prajapati";
for(let value of str) console.log(value);








