// claouser -> {function + req data/lexical scope/surrounding state}

// let name = "Manish";
function outerFunction() {
    let name = "Pinku"; // blocked scope
    function innerFunction() {
        // let name = "Lakshay";
        console.log(name);
    }
    innerFunction();
}
outerFunction();


function outer1(){
    let name1="Index";
    function inner1(){
        console.log("name1 variable : ", name1);
    }
    return inner1;
}
let inner1 = outer1();
inner1(); // still we will able to see that inner function can print the variable name1, even the scope of name1 is over


// so when there is the concept of nested function then innner function is bind with its required variable

