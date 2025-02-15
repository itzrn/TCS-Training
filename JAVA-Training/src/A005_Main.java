import java.awt.*;

public class A005_Main {
    // this is the file which run and ultimately create the cars.

    public static void main(String[] args) {
        // creating the instance of class
        A005_Constructor myCar1 = new A005_Constructor(25.5,
                "1BC32E", Color.BLUE, true);
        A005_Constructor myCar2 = new A005_Constructor(13.9,
                "1BC32N", Color.BLUE, false);


        System.out.println("My Car's License Plate is: " + myCar1.licensePlate);
        System.out.println("Aryan's License Plate is: " + myCar2.licensePlate);
        System.out.println(myCar1.paintColor); // here the println function is calling the toString function and then
        // figuring out what to print.
    }
}
