public class B005_Encapsulation {
    private  String name;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public static void main(String[] args) {
        B005_Encapsulation obj = new B005_Encapsulation();
        obj.setName("John");
        System.out.println(obj.getName());
    }
}
/*
We need to write the getter and setter, while we are implementing Encapsulation.
 */
