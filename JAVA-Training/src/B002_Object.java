import java.util.Arrays;

public class B002_Object {
    public static void main(String[] args) {
        Integer[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        Arrays.sort(arr, (a, b) -> Integer.compare(b, a));
    }
}
/*
Object is an instance of a class. Class is template or blueprint from which object are created.
so object is the instance of class.

Object has three characteristics:
    State -> attributes
    Behaviour - functions
    Identity
 */
