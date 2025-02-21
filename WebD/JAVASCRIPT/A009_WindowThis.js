console.log(a);
console.log(this.a);
console.log(window.a);

var a = 10;

console.log(a);
console.log(this.a);
console.log(window.a);

// this is basically refering to the global object

console.log(window);
console.log(this);
console.log(this===window);
