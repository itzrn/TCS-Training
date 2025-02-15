class Parent {
    public void print() {
        System.out.println("Parent");
    }
}
public class B003_Inheritance extends Parent{
    @Override
    public void print() {
        System.out.println("Child");
    }
    public static void main(String[] args) {
        B003_Inheritance obj = new B003_Inheritance();
        obj.print();

        if(obj instanceof Parent) {
            System.out.println( "obj is an instance of Parent");
        }
    }
}
/*
Inheritance in Java is a mechanism in which  one object acquires all the properties and behaviours of parent object.
Inheritance is one of the key features of Object-Oriented Programming.

Why use Inheritance in java:
    For Code Reusability.
    For method Overriding

Types ->
    Single
    MultiLevel
    Hierarchical
 */
