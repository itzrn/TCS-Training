package XploreRecording;

public class A011_this {
    private int x;
    public A011_this() {
        this(10);
    }
    public A011_this(int x) {
        this.x = x;

    }
    public int getX() {
        return x;
    }
    public void setX(int x) {
        this.x = x;
    }

    static int a, b, c;
    static { // this is an implicit way to initialize any static variable
        a = 10;
        b = 20;
        c = a + b;
    }

    static  class NestedClass {
        public int returnInt() {
            System.out.println(a);
            // System.out.println(getX()); // not possible
            return 10;
        }
        static int b=100;
    }

    public static void main(String[] args) {
        A011_this.NestedClass obj = new A011_this.NestedClass();
        System.out.println(A011_this.NestedClass.b);
    }

}

/*
How do java provide the feature of data hiding feature?
basically we make data members private and we hide it.

All the object we create get allocated in heap memory.
this keyword is used to access the data member of particular instance.

so:
    this is the reference variable that refers to the current object.
    this can be used to invoke current class method
    this() can be used to invoke current class constructor and only allowed in the constructor body.
    this ca be passed as an argument in the method call.
    this can be passed as argument in the constructor call.
    this can be used to return the current class instance from the method.


Various ways static comes into picture in java:
    variables
    methods
    Block
    Nested class

Nested static class doesn't need reference of outer class
A static class can not access non-static members of the outer class.

 */
