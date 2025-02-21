// with the help of async and await we can make the asynchrnous code into synchronous
// async await is used then only when we have to handle the promises

// async
async function getData1() { // async function always return promise
    setTimeout(function(){
        console.log("I am inside setTime out Block of getData()");
    }, 3000);
}

let output = getData1();



// fetch api
// to manage the concept of Promises, fetch api come into consideration
// The Fetch API provides an interface for fetching resources (including across the network). 
// It is a more powerful and flexible replacement for XMLHttpRequest.

// reguest can be -> get(want to retrieve), post(want to creat any data), 
// put(want to update the data on excistent resource), delete(want to remove any data)
 
async function getData2() {// await is allowed only in async function

    // get request, marked as await bcz untill we wont get the data we can not process further
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    // parsing of json is also asynchronous
    let data =await res.json();
    console.log(data);
}
let result = getData2();
console.log(result);

///////////////////////////////////////////////////////
// doing a post request
// const myheader = new Headers();
// myheader.append("Constant-Type", "application/json");

// const url = "https://jsonplaceholder.typicode.com/posts";
// const options = {
//     method:"POST",
//     body:JSON.stringify({username:"Aryan Prajapati", title:"I am in Love With you!", userId:10}),
//     headers:myheader,
// };
async function getData(){
    const response = await fetch("https://dummyjson.com/posts"); // fetch is a Promise so .then . catch is allowed
    let data = await response.json();
    console.log("Get Data Response : ", data);
}
async function postData(){
    const response = await fetch('https://dummyjson.com/posts/add', {
        method:'POST', 
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            title:'Aryan Prajapati -> I am in love with someone',
            userId:1
        }),
    });
    let data = await response.json();
    console.log("Post Data Response : ", data);
}

async function processData(){// making postData() and getData() synchrnous
    await postData();
    await getData(); // here in get data you will not able to see your posted data, bcz the api which we are using not mainting the data
}

processData();










