public class A016_Inheritance {
    int age;
    int numberOfLegs;

    public A016_Inheritance(int age, int numberOfLegs) {
        this.age = age;
        this.numberOfLegs = numberOfLegs;
    }
    public void says(){
        System.out.println("....");
    }
    public void walk(){
        System.out.println("inset walking....");
    }
}

/*
Inheritance is when one class acquires the methods and fields of another
The class which inherits the properties of other os know as a subclass (or derived class, parent class)
The whose properties are inherited is called super class.

Every object in java inherits the class implicitly so that they can have basic features which, according to java
every class should have. Some of these include clone, equals, toString ...

we use the keyword extends to inherit any class.


Advantages
Minimize duplication of code

Disadvantage
- Superclass and subclass can be tightly coupled means we can not use it independently of each other.
- Increased effort to jump through levels of abstraction to get appropriate functionality
 */
