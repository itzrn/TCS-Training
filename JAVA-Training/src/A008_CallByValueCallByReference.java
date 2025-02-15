import java.awt.*;

public class A008_CallByValueCallByReference {
    /**
     * Argument
     *      Actual value passed to the function. Ex - changeColor("pink"); here pink is argument
     *
     * Parameter
     *      A variable is method definition. Ex - public void changeColor(String color), here color is a
     *      parameter
     *
     *
     * So. when a method is called, the parameters get the value of the arguments that were passed to the function.
     *
     *
     * Passing argument into a function
     *      call by value -  when a function receive a copy of each argument to it rather than a reference to
     *      the object itself.
     *
     *      call by reference - A function receives a reference to each argument, and can modify these arguments within
     *      it's body code.
     *
     *      however in java we only have call by value.
     */

    public static void main(String[] args) {
        A005_Constructor myCar1 = new A005_Constructor(25.5,
                "1BC32E", Color.BLUE, true);
        A005_Constructor myCar2 = new A005_Constructor(13.9,
                "1BC32N", Color.BLUE, false);

        double currentSpeed = 10;
        currentSpeed = myCar1.speedUpReturn(currentSpeed);
        System.out.println("Current Speed is: " + currentSpeed);
    }
}
