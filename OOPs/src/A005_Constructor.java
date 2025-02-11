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
}
