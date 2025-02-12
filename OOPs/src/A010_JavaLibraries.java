import java.util.Random;

public class A010_JavaLibraries {
    public static void main(String[] args) {
        Random random = new Random();
        System.out.println(random.nextInt(100));

        // getting random number from 50 to 100
        int randomNumber = random.nextInt(50) + 50;
        System.out.println(randomNumber);
    }
}
/*
    Java.lang -> contains the class and interfaces that are Fundamental to the
    core java language(math, boolean, bytes)

    Java.util -> provides users with generic (Scanning, formatting strings, data manipulation)
    Some classes and interfaces from java.util include Timezone, HashTable, Vector
    Enumeration, and StringTokenizer

    The java.net library contains classes interfaces that provide a powerful infrastructure for networking in java.
    We can use classes of this library to make API calls to receive data for your program.
 */
