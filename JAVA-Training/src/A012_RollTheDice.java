import java.util.Scanner;

public class A012_RollTheDice {
    public static void main(String[] args) {
        A012_Dice dice1 = new A012_Dice(), dice2 = new A012_Dice();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of times to roll the dice : ");
        int num = sc.nextInt();
        System.out.println("Initial dice faces :");
        System.out.println("Dice 1 : " + dice1.getFaceUp() + " Dice 2 : " + dice2.getFaceUp());
        System.out.println();
        System.out.println("Play Begin");
        for (int i = 0; i < num; i++) {
            dice1.roll();
            dice2.roll();
            System.out.println("Dice 1 : " + dice1.getFaceUp() + " Dice 2 : " + dice2.getFaceUp());
        }
    }
}
