final class B008_Test{
    int a=10;
}
public class B008_Variables {
    public static void main(String[] args) {
        B008_Test b=new B008_Test();
        System.out.println(b.a);
        b.a=20;
    }
}
/*
There are three types of variable:
Local variable, whose scope ends when the function ends
instance variable, whenever we make an object
Static variable, are class variable have scope throughout the instance

final variable are always written in capital letter, and it can not inherit.

If a class, variable, method is final it will not get inherit
If class is only final then it doesn't mean that the class methods and class variable will also be final until they explicitly made final
 */
