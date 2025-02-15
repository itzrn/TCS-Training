package XploreRecording;

public class A010_Static {
    int x=10;
    public static void nonStaticDataInStaticMethod(){
        A010_Static obj = new A010_Static();
        System.out.println(obj.x);

//        System.out.println(this.x); // not possible
//        System.out.println(x); // not possible
    }

    public A010_Static(){}


    public static void main(String[] args) {
        A010_DBUtil.getDBConnection();
        A010_Static obj = new A010_Static();
        obj.nonStaticDataInStaticMethod();
    }

    public final void sampleMethod(){
        A010_DBUtil.getDBConnection();
    }
    public void sampleMethod(int a){

    }
}
/*
If we apply static keywords with any method it is known as class method or static method.

A static method belong to the class rather than the object of a class.
A static method can access static data members and can change the value of it.
A static method can be invoked without the need for creating as instance of a class.

A static method can access the static data members but can not access the non-static data members.
To access the non-static data in static method then we need to create the object of the class.

A final method can be overloaded but can not be overridden.
We can also access the static method using object.

There are two main restriction on static methods:
    The static method can not use non-static data member or call non-static method directly
    this and super cannot be used in static context


Why jvm main method is static?
It is because the object is not required to call a static method. If
it were a non-static method, JVM creates an object first then call main() method that
will lead the problem of extra memory allocation.

 */