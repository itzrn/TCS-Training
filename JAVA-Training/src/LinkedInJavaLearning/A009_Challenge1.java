package LinkedInJavaLearning;

public class A009_Challenge1 {
    String name;
    int age;
    String breed; // mix or pure
    public A009_Challenge1(String name, int age, String breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    public void bark() {
        System.out.println("Woof");
    }
    public void eat() {
        System.out.println("Yum yum yum");
    }
    public void sleep() {
        System.out.println("zzz");
    }

    public static void main(String[] args) {
        A009_Challenge1 myDog = new A009_Challenge1("Bella", 3, "mix");
        myDog.bark();
        myDog.eat();
        myDog.sleep();
    }
}

/**
 * Create a class with three attributes and three functions that represent a dog
 * Use the main method to create the instance of a class.
 * With this instance call one of the method of the class.
 */
