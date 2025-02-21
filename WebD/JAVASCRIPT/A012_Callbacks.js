// here callback is nothing but the function that is need to be perform when some operation happend.
function fetchData(callback){
    setTimeout(()=>{ // after every 5 sec the code in this arrow function will be executed
        let data = "Fetched Data";
        callback(data, "server error");
    }, 5000); // this function is basically call the giebn function after every given miliseconds(1s = 1000 miliseconds)
}

function handleData(data, error){ // in if null treated as false
    if(error) console.log(error);
    else console.log(data);
}

console.log("Start");
fetchData(handleData);

/*
Problem with callback
1. Callback hell , pyramid of Doom (deeply nested of async operation)
2. not maintable
3. error handeling can be a night mare over here
4. hard to make understand
5. giving the control to another function to perform the next operation, so it is not in control any more, this is called inversion of control


To handle all of this "Promises" comes to the picture.
*/
