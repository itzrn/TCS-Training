// to add at particular location we can use
// .insertAdjuscentElement()
// is take two parameter 1. position 2. HTML content
// position is of 4 types -> 1. before begin 2. after begin 3. before end 4. after end

let mydiv = document.querySelector('#div2');
console.log("#div2 : ", mydiv);

// creating new element
let newEle1 = document.createElement('span');
let newEle2 = document.createElement('span');
let newEle3= document.createElement('span');
let newEle4 = document.createElement('span');
// console.log('Created Ele : ', newEle);

newEle1.textContent = "This is me Aryan Prajapati";
newEle2.textContent = "This is me Ashmit Prajapati";
newEle3.textContent = "This is me Dharamendra Kumar";
newEle4.textContent = "This is me Manoj Kumar Prajapati";

// before begin
mydiv.insertAdjacentElement('beforebegin', newEle1);
mydiv.insertAdjacentElement('afterbegin', newEle2);
mydiv.insertAdjacentElement('beforeend', newEle3);
mydiv.insertAdjacentElement('afterend', newEle4);
