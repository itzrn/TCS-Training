// Promise is object that representing the state.
// there are 3 states -> pending, fulfiled, rejected

// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Data Fetched");
//             // reject("Error got in Between"); // this is gonna return as result
//         }, 5000);
//     });
// }

// getData()
//     .then(result =>{
//         // entrying here means resolve is called
//         console.log("Success");
//         console.log(result);
//     }) // we can use .then again for asynchronous operation
//     .catch(error => {
//         // entrying here means reject is called
//         console.log("OOPsy OOPsy bhaiya Sysky Sysky");
//         console.log(error);
//     });

// here we are handling asynschronous operation which is to be happen one after another









/////////////////////////////////////////////////////////////////////
// Love babbar

// Promise
// An object represents the eventual completion (or failure) of an asynchrnous operation and its resulting value
// Promise have three types of state
// pending
// fulfilled
// rejected

// This lets asynchronous methods return values like 
// synchronous methods: instead of immediately returning 
// the final value, the asynchronous method returns a promise 
// to supply the value at some point in the future.


// its a good practice to add asynchronous code into promise.

let firstPromise = new Promise((resolve, reject) => {
    console.log("Aryan Prajapati");
    resolve("Resolved1");// showing that the prmoise is resolved
    // reject(new Error("Internal Server Issue")); // to throw a message that the promise is not resolved
});


////////////////////////////////////////////////////////

function saySomeThing(){
    console.log("Hello Duniya!");
}

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(saySomeThing, 10000);
    resolve("Resolved2");
});


//////////////////////////////////////////////////////
// let there is a promise and if it get fulfill then we have to perform some task or if get reject then how to handle

let thirdPromise = new Promise((resolve, reject)=>{
    let success = true;
    if(success) resolve("Promise Fulfilled!");
    else reject("Promise rejected!");
});

thirdPromise.then((message)=>{
    console.log("Then ka message : "+message);
}).catch((error)=>{
    console.log("Error : "+error);
});


////////////////////////////////////////////
// we can put multiple .then()

let fourthPromise = new Promise((resolve, reject)=>{
    let success = true;
    if(success) resolve("Aryan!");
    else reject("Koi Chutiya hi reject hua hai!");
});

fourthPromise.then((message)=>{
    console.log("Fouth Promise Message : "+message);
    return message;
}).then((message)=>{
    console.log("Message from First Then of Fourth Promise : ");
    return message;
}).catch((error)=>{
    console.log("Fouth Promise ka error : "+error);
    return -1;
}).finally((message)=>{
    console.log("Finally ka message");
});

// .finally block we also have which will run always


///////////////////////////////////////////////////////
let finalPromise = Promise.all([firstPromise, secondPromise, thirdPromise, fourthPromise])
.then((values)=>{
    console.log(values);
    return 1;
}); // .catch() .finally() also we can add
// this promise get marked resolve when all the promises provided to it get resolved
