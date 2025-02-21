// means how we can have a connection with HTML Files
// DOM -> Document Object Model
// if you are converting the HTML code to JS Object then that object is called as DOM.
// DOM is visualized in tree like structure
// window -> DOM, BOM(Browser Object Model), JS CORE

// The interaction happening with browser(history, screen size etc) except the HTML come under BOM

///////////////////////////////////////////////////////////
// to fetch element using ID from HTML code
// document.getElementById("fpara");


////////////////////////////////////////////////////////////
// to fetch element using class name from HTML code
// document.getElementsByClassName("text");

////////////////////////////////////////////////////////////
// to fetch element using tag name from HTML code
// document.getElementsByTagName("p");

////////////////////////////////////////////////////////////
// here one catch is, if there are mutiple object then you will get the first created object from html file
// document.querySelector('#fpara'); // it will automatically get the element by id
// document.querySelector('.fheading'); // it will automatically get the element by class name
// document.querySelector('p'); // it will automatically get the element by tag name

////////////////////////////////////////////////////////////
// to get all the object related to id, class or tag
// document.querySelectorAll("#fpara");
// document.querySelectorAll(".fheading");
// document.querySelectorAll("p");



/////////////////////////////////////////////////////////////
// now we will look into how to update any element
// innerHTML(this gives the HTML content present inside that particular element), outterHTML(this give the content along with the current element), textContent, innerText

// to get
let p = document.querySelector('#body');
// console.log(p.innerHTML);

// the bellow line will remove all the content of bosy tag, as p contain the object of body
// p.innerHTML="<p id=\"fpara\"> This is Aryan Prajapati</p>";

// to set
let p1 = document.querySelector('#fpara');
// console.log(p1.innerHTML);
p1.textContent = "Aryan Prajapati";



/////////////////////////////////////////////////////////////
let tmp = document.querySelector('#fdiv');
console.log(tmp.textContent); // the way its written on HTML file it will print exactly in the same way, it won't ignore the hiddne content
console.log(tmp.innerText); // it just render out what the text is, and also ignore the hidden content


/*
innerHTML vs. outerHTML: innerHTML deals with the content 
inside the element, while outerHTML includes the element itself.

innerText vs. textContent: innerText retrieves only visible text, excluding 
child elements, while textContent retrieves all text content, including child elements.
*/