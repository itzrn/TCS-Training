class Human{
    // by default the members are public
    age=10; 
    #wt=50; // now this particular variable is private
    ht; // this is the way to declare the variable

    constructor(ht, wt){
        this.ht=ht;
        this.#wt=wt;
    }




    walking(){
        console.log("I am walking", this.#wt);
    }
    #running(){ // now this function is private
        console.log("I am running");
    }

    // to access the private element outside the class we use getter and setter
    // wighout the use of get and set variable it give no error, but using it program and programmer get the clarity
    get weight(){
        return this.#wt;
    }
    set weight(num){
        this.#wt=num;
    }
}
let obj = new Human(190, 60);
obj.walking();
