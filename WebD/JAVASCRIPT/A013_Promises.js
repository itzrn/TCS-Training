// Promise is object that representing the state.
// there are 3 states -> pending, fulfiled, rejected

function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data Fetched");
            // reject("Error got in Between"); // this is gonna return as result
        }, 5000);
    });
}

getData()
    .then(result =>{
        // entrying here means resolve is called
        console.log("Success");
        console.log(result);
    }) // we can use .then again for asynchronous operation
    .catch(error => {
        // entrying here means reject is called
        console.log("OOPsy OOPsy bhaiya Sysky Sysky");
        console.log(error);
    });

// here we are handling asynschronous operation which is to be happen one after another
