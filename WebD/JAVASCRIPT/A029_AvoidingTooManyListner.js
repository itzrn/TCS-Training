


// adding function to eventListener is not a good practise, as we have made many instance of a single function
// let paras = document.querySelectorAll('p');
// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', function(event){
//         alert("You have clicked on para: "+(i+1));
//     });
// }


/////////////////////////////////////////////////////////

let alertPara1 = function(event){ // by default event object is received
    alert("You have clicked on para: "+event.target.textContent);
};

let paras1 = document.querySelectorAll('#div1');
for(let i=0; i<paras1.length; i++){
    let para = paras1[i];
    para.addEventListener('click', alertPara1);
}

////////////////////////////////////////////////////////

// directly applying to div
let alertPara2 = function(event){
    if(event.target.nodeName === 'SPAN')
        alert("You have clicked on para: "+event.target.textContent);
    else alert("Ye SPAN toh nhi hai: "+event.target.textContent);
};
let div2 = document.getElementById('div2');
div2.addEventListener('click', alertPara2);


/////////////////////////////////////////////////

// HW
// How to use dynamically DOMContentLoaded of event to add script 