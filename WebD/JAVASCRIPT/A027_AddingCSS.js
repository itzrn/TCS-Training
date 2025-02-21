// way 1
// using .style (set and get)
// drawback here is we can do only single inline style update, we can not handle multiple things

let p_2 = document.getElementById('p_2');
console.log(p_2.outerHTML);

console.log(p_2.style);
// changing the background color
p_2.style.backgroundColor = 'red'; // comment out and see first


// way 2
// using CSS text
// multiple incline can we access at a time
let div12 = document.querySelector('#div12');
console.log(div12);
console.log(div12.style.cssText); // get

div12.style.cssText = "background-color:orange; color:white; padding:0.5rem"; // comment out and see first

// way 3
// using setAttribute()
// used to change the id, class id
let div1 = document.querySelector('#div1');
console.log(div1);

// adding class
div1.setAttribute('class', 'class1'); // comment out and check
console.log(div1);

// like changing something in style
div1.setAttribute('style', "padding: 0.1rem"); // comment out and check
// this will change the whole style and put what you provided

// way 4
// adding mutilpe classes
// .className
let p1 = document.querySelector('#p1');
console.log(p1);
console.log(p1.className);

p1.className = "laudu Goku" ; // comment cout and check
console.log(p1.className); // comment cout and check


// way 5
// using .classList
// you get all the class in the form of array

console.log(p1.classList);
p1.classList.add("laudugoku"); // comment out and check
console.log(p1.classList); // comment out and check

// to remove
p1.classList.remove("laudu"); // comment out and check
console.log(p1.classList); // comment out and check

// tooggle, if present will remove and visce versa
p1.classList.toggle('laudu');
console.log(p1.classList);

p1.classList.toggle('laudu');
console.log(p1.classList);

// to know if a class is present or not
console.log(p1.classList.contains('laudu'));




 