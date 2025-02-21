// events are just announcement done by browser
// clicking a button is an event
// every event is attached with an action

// monitorEvents(document); // it wil start showing all the event present in the document
// unmonitorEvents(document); // to stop monitoring event

// event target are elements of HTML(means clicking that some behavior come to see)
// the action which is to be performed is wriiten in event listner


// to a particular element we can add action using addEventListner()
// to remove we can use removeEventListner()



function changeText(event){
    console.log(event);
    let p1 = document.getElementById('p1');
    p1.textContent = "Hello Duniya! Duniya toh chutiya hai usko kyo hello bolna!";
}

let p1 = document.getElementById('p1');
p1.addEventListener('click', changeText);

// to remove the event

// p1.removeEventListener('click', changeText); // after applying this no action will be performed


// there are three phase of Events
// 1. capturing(moving from root to child), 2. At-target (at child), 3. Bubbling(back to root)
// addEventListner by default hit in Bubbling phase, to make it happen in capture phase we need to set a parameter true i.e. useCaptureValue

// syntax
// addEventListener(type, listener, useCapture)

// it is not possible to add event explicitly in target phase. We can only add them in capturing or bubbling phase


// changing default behaviour
let anchor1 = document.getElementById('anchor1');
anchor1.addEventListener('click', function(event){
    event.preventDefault(); // this make the default behavior to change
    anchor1.textContent = "Ab tu nikal"
    console.log();
});

