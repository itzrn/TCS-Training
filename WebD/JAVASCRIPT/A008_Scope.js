// there are three type of scope
// global -> let, const, var
// function -> let, const, var
// block -> let, const (var here is global still)


/////////////////////////////////////////////////////

// temporal dead lock
console.log(marks); // as this marks will not be accessable it will show the temporal dead lock from line 10 to line 13
console.log("Aryan");
console.log("Prajapati");
let marks=100;
console.log(marks);
