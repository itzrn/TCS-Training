public class A015_Main {
    public static void main(String[] args) {
        A015_BankAccount myAccount = new A015_BankAccount(4141, 100);
//        System.out.println( myAccount.balance);

        try{
            myAccount.deposit(-19);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        try{
            myAccount.withdraw(190);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
