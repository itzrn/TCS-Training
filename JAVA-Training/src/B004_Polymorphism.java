class Test {
    public void test1() {
        System.out.println("test1 of parent");
    }
    public static void test2(){
        System.out.println("test2 of parent");
    }
}
public class B004_Polymorphism extends Test{
    public void test1() {
        System.out.println("test1 of child");
    }
    public static void test2(){
        System.out.println("test2 of child");
    }
    public static void main(String[] args) {
        Test obj = new B004_Polymorphism();
        obj.test1();

        Test obj1 = new B004_Polymorphism();
        obj1.test2(); // or Test.test2();

        B004_Polymorphism obj2 = new B004_Polymorphism();
        obj2.test2(); // or B004_Polymorphism.test2();
    }
}

/*
Polymorphism in java is a concept by which we can perform a single action by different ways.
It is the object's type rather than the reference type, that determines which method we called.
We can achieve polymorphism in two ways:
1. Method Overloading: Same method name but different parameter lists within the same class.
2. Method Overriding: Subclass provides a specific implementation for a method defined in its superclass.
We can assign a super class object to a subclass reference variable.

- A non-static method can be overloaded by a static method
- A non-static method can not be overridden by static method or vice versa
- A static method can not override the static method, but writing so will not give the error bcz
  static method hide the parent class static method. So, when this is the cas then reference static method is called.

 */
