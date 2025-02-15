package LinkedInJavaLearning;

public class A016_Spider extends A016_Inheritance {
    boolean isPoisonous;
    public A016_Spider(int age, boolean isPoisonous){
        super(age, 8);
        this.isPoisonous = isPoisonous;
    }

    @Override
    public void says() {
        System.out.println("HISSSSSS");
    }

    public static void main(String[] args) {
        A016_Spider spider = new A016_Spider(10, true);
        spider.says();
        if(spider instanceof A016_Spider && spider instanceof A016_Inheritance){
            System.out.println("Spider is insect and spider");
        }
    }
}
