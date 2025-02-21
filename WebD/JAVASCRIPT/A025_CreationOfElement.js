// suppose i want to add heading
// creating ele
let fheading = document.createElement('h1');
// puting some content to fheading
fheading.textContent = "My name is Aryan Prajapati";

// suppose you want to make this element the child of body
let bodyTag = document.querySelector('body');
bodyTag.appendChild(fheading); // this will get add at the last after every child

