package LinkedInJavaLearning;

public class A015_BankAccount {

    // we don't want this to be access by anyone
    private int accountNumber;
    private double balance;

    public A015_BankAccount(int accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        System.out.println("Account created with account number: " + this.accountNumber + " and balance: " + this.balance);
    }

    public void deposit(double amount) throws Exception{
        if(amount <= 0) throw new Exception("Amount cannot be less than or equal to zero");
        balance += amount;
        System.out.println("Deposited " + amount + " to account number: " + this.accountNumber + " and balance: " + this.balance);
    }

    public void withdraw(double amount) throws Exception{
        if(amount <= 0) throw new Exception("Amount cannot be less than or equal to zero");
        if(amount > this.balance) throw new Exception("Insufficient balance");
        this.balance -= amount;
        System.out.println("Withdrawn " + amount + " from account number: " + this.accountNumber + " and balance: " + this.balance);
    }
}
