import java.util.Random;

public class A017_Interface {
    public static void main(String[] args) {
        A017_Dog dog = new A017_Dog();
        A017_Cat cat = new A017_Cat();

        if(cat instanceof A017_Pet){ // is this is true then we guarantee that there is the implementation of play method
            cat.play();
        }

        if(dog instanceof A017_Pet){
            dog.play();
        }

        // or we can decide the pet should be dog or cat
        Random random = new Random();
        A017_Pet pet = random.nextBoolean() ? new A017_Dog() : new A017_Cat();
        pet.play();
    }
}
/*
Interfaces are a way to enforce certain fields or methods on a class.
Interface do not enforce exactly how these methods should be implemented.

Interfaces are the definition of a behavior
When used, they force classes and objects to have certain properties without
forcing their implementation
 */
