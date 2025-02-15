package LinkedInJavaLearning;

import java.util.Scanner;
public class A007_Scanner {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String userInput = sc.next();

        String upper = userInput.toUpperCase();
        System.out.println("Initial input : " + userInput);
        System.out.println("Upper case : " + upper);

        // if data type won't get match then we get input mismatch exception
    }
}
