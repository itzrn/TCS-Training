package LinkedInJavaLearning;

import java.awt.*;

public class A005_Constructor {
    double averageMilesPerGallon;
    String licensePlate;
    Color paintColor;
    boolean areTailingWorking;

    // constructing constructor
    public A005_Constructor(double averageMilesPerGallon, String licensePlate, Color paintColor, boolean areTailingWorking) {
        this.averageMilesPerGallon = averageMilesPerGallon;
        this.licensePlate = licensePlate;
        this.paintColor = paintColor;
        this.areTailingWorking = areTailingWorking;
    }

    // creating method
    public void changePaintColor(Color newColor) {
        this.paintColor = newColor;
    }

    // method to allow the car to speed up
    public void speedUp(double currentSpeed){
        currentSpeed += 100;
    } // if this function is call by reference it will update the value to variable
    // if it is called by value it won't update and this function essentially do nothing.

    // what we can do to allow the in java, we can use the return statement
    public double speedUpReturn(double currentSpeed){
        currentSpeed += 100;
        return currentSpeed;
    }
}
