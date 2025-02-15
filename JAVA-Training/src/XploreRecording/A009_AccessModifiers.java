package XploreRecording;

class A009_Test {
    protected int a = 10;
    private int b = 20;
}
public class A009_AccessModifiers extends A009_Test {
    public void arr(){
        System.out.println(a);
//        System.out.println(b); // not accessible
    }
}

/*
- The access modifiers in java specifies the accessibility or scope of a field,
  method, constructor, or class. We can change the access of field by applying
  access modifiers on it.

- Private, Default, public, protected

if a class is of Default then it can access in the same package but not outside the package.
Even if we import that package then also we won't be able to access that class

For default method we can not access it outside the class, but we can access when we inherit that class

         with in   with in     outside      outside
         class     package     package by   package
                                subclass
                                 only
private     Y        N           N            N
Default     Y        Y           N            N
public      Y        Y           Y            Y
 */
