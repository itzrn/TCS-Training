/////////////////////////////////////////////////
let firstName = new String("Aryan");
console.log(firstName);

////////////////////////////////////////////////
let n = `Aryan 
is 
a good
boy.`;
console.log(n);

let n1 = "Aryan";
let n2 = 'Aryan';

///////////////////////////////////////////////
// String formating
let op1="Aryan", op2="Prajapati";
let op3 = `${op1} ${op2}`;


//////////////////////////////////////////////
let len = op3.length;

//////////////////////////////////////////////
op3.toUpperCase();
op3.toLowerCase();

/////////////////////////////////////////////
// substring
op3.substring(2, 4); //first index inclusive, second index exclusive. just like of java

////////////////////////////////////////////
// spliting of string
let words = op3.split(' '); //this will return ans array object

// to join the array of string
console.log(words.join(', '));

