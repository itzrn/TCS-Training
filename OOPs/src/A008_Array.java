import java.lang.reflect.Array; // all the function of Array is static so we can directly access it.

public class A008_Array {

    /**
     * It's a container that store a sequence of values of the same type.
     *
    */

    public static void main(String[] args) {
        int[] arr = new int[5]; // size can not be changed
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;
        arr[3] = 40;
        arr[4] = 50;
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

        // another way to access the index
        System.out.println(Array.get(arr, 0));
    }
}
