function createCourse(coursename){
    console.log('creating ' + coursename);
}
createCourse("HLD");
createCourse("LLD");

////////////////////////////////////////////
// storing a function into a variable
let sum = function (a, b){
    return a+b;
}
console.log(sum(1, 2));

const sum1 = function (a, b){ // using const is more prefarable
    return a+b;
}
console.log(sum(1, 2));

///////////////////////////////////////////
// arrow function
let mult = (a, b) => {
    return a*b;
}
console.log(mult(0, 10.0));

//////////////////////////////////////////


