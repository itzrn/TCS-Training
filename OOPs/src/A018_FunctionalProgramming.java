public class A018_FunctionalProgramming {
    public static void main(String[] args) {
        A018_Answerable phone = ()-> "Hello";
        System.out.println(phone.answer());
        A018_Predicate isOdd = n->n % 2 != 0;
        System.out.println(isOdd.test(10));
    }
}

/*
Functional programming focuses on computing results from functions rather than
performing actions on objects.

Object are immutable

Instead of changing an object, you create a new object which look like the old object
except for the change

Lambda functions are anonymous functions that you can create in java without
the usual code overhead

A great tool if you need a quick function for a calculation in your code.

They usually have a single purpose and do not affect any other objects in the code.
 */
