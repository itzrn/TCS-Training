function fun(name="Prabhu Deva"){ // for multiple parameters also it works
    console.log(name);
}
fun();


////////////////////////////
// when one parameter depends on another parameter
function fun1(fname="Aryan", lname = fname.toUpperCase()){
    console.log("My name is: ", fname, " ", lname);
}

fun1("Aryan");
fun1("Aryan", "Prajapati");

////////////////////////////
// object can also be passed as default parameter
function fun2(obj={age:10, wt:20, ht:100}){
    console.log("Hello Ji ", obj);
}
fun2();


////////////////////////////////
// passing null -> will print null
fun(null);

// passing undefined -> will print default value
fun(undefined);

///////////////////////////////////
// in default parameter function can also be used
