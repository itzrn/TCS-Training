package LinkedInJavaLearning;

import java.util.Random;
public class A012_Dice {
    private int faceUp;
    Random random;
    public A012_Dice(){
        random=new Random();
        faceUp=random.nextInt(6)+1;
        roll();
    }
    public int getFaceUp() {
        return faceUp;
    }
    public void roll(){
        faceUp=random.nextInt(6)+1;
    }
}
/*
Create a dice roll program, where the user roll the dice and the program will
output the value of that dice.

Input - User must input something in the console to roll the dice.
Output - The Program prints out the outcome of two random rolls
         (assuming the user is rolling two dice at a time)
 */
