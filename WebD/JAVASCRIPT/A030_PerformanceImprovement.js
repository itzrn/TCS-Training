
// code 1

// we have a standard way to find out how much time my program takes time to run
const t1 = performance.now();
for(let i=0; i<100; i++){
    let para = document.createElement('p');
    para.textContent = "This is Para : "+(i+1);
    // directly appending to body
    document.body.appendChild(para);
}
const t2 = performance.now();

console.log("Total time by code 1 : "+(t2-t1));

////////////////////////////////////////////////////////

// code 2
const t3 = performance.now();
let mydiv = document.createElement('div');
for(let i=100; i<200; i++){
    let para = document.createElement('p');
    para.textContent = "This is Para : "+(i+1);
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();

console.log("Total time by code 1 : "+(t4-t3));

///////////////////////////////////////////////////
console.log(document.body.innerHTML);


/////////////////////////////////////////////////
// reflow -> a process of finding position/dimension of element that you want to show on your page(this is computationally intensive task)
// repaint -> it is the process of displaying content pixel by pixel (its faster)
// reflow and repaint calculated when you try to show something on screen
// code 1 is slower bcz there was 100 reflow and 100 repaint
// where as in code 2 there was only 1 reflow and 1 repaint


// Good practice is here
// using Document Fragment
// it is a light weight doc object
// so when ever we append here, there is no reflow and repaint
// so only when the doc fragment is added at the screen then only take 1 reflow and 1 repaint

const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i=200; i<300; i++){
    let para = document.createElement('p');
    para.textContent = "This is Para : "+(i+1);

    // no reflow and no repaint for the below line
    fragment.appendChild(para);
}
document.body.appendChild(fragment);

const t6 = performance.now();

console.log(t6-t5);
