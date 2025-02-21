try{
    console.log("Try block starts here");
    console.log(x);
    console.log("Try block ends here");
}catch(error){
    console.log("I am inside Catch block");
}

// finally block -> its a block that doesn't depen upon error arrived or not, it will run

try{
    console.log("Try block starts here1");
    console.log(x);
    console.log("Try block ends here1");
}catch(error){
    console.log("I am inside Catch block1");
}finally{
    console.log("I will run everytime1");
}



////////////////////////////////////
// creating custom error
try{
    // this is a referenece error
    console.log(xxx);

}catch (err){
    console.log(err.name, " ", err.message);
}

//////////////////////////////////////////////////

try{
    throw new Error("Ye kya kr rha hai bhai error dena lagunga ma, smbhal");
}catch (err){
    console.log(err.name, " ", err.message);
}

/////////////////////////////////////////////////



try {
    console.log("Try block executed");
    throw new Error("Something went wrong!");
} catch (error) {
    console.log("Caught error:", error.message);
} finally {
    console.log("Finally block always executes");
}
/*
Output:
Try block executed
Caught error: Something went wrong!
Finally block always executes
*/




class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("This is a custom error!");
} catch (error) {
    console.log(error.name + ": " + error.message);
}
