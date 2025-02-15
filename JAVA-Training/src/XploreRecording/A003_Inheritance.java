package XploreRecording;

class A003_Parent {
    public void print() {
        System.out.println("XploreRecording.Parent");
    }
}
public class A003_Inheritance extends A003_Parent{
    @Override
    public void print() {
        System.out.println("Child");
    }
    public static void main(String[] args) {
        A003_Inheritance obj = new A003_Inheritance();
        obj.print();

        if(obj instanceof A003_Parent) {
            System.out.println( "obj is an instance of XploreRecording.Parent");
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
