package LinkedInJavaLearning;

public class A006_String {
    /*
     - A String os a list of characters.
     - Strings are immutable.
     - A single character is called a char.
     - In java 8 Strings where made up of char array.
     - But after java 9 Strings where made up of final Byte array and these array can not be changed
       after initialization. So this is the reason it's immutable.
     - So here is the question, Why did the creator of java decided to put byte array in java 9
            by having strings of a byte array, this means that it takes less space in java because a char
            itself takes up 8 bytes.
    */

    public static void main(String[] args) {
        String userInput = "entertainment";

        // using  some inbuilt function of String
        String upper = userInput.toUpperCase(); // this return String
        System.out.println("Initial input : " + userInput);
        System.out.println("Upper case : " + upper);

        // to access any character at any index, here we have 0 indexing
        char ch = userInput.charAt(0);
        System.out.println("First character : " + ch);

        // we can use .contains function to check whether a substring is present or not.
        // inside it uses .indexOf() function and then check the string is available or not
        // so its time complexity gets n*m
        // contains function is case-sensitive
        boolean isPresent = userInput.contains("enter");
        System.out.println("Is present : " + isPresent);
    }
}
